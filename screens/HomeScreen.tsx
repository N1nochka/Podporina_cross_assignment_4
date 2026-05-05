import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import SmallButton from '../components/SmallButton';

export default function HomeScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}  // ← додано
    >
      <Text style={styles.welcome}>Вітаємо, User!</Text>

      <Text style={styles.sectionTitle}>🎯 НАСТУПНА ЗДАЧА ПЛАЗМИ:</Text>
      <Card>
        <View style={styles.dateTimeRow}>
          <Text style={styles.dateText}>Пʼятниця, 25 квітня об 11:30</Text>
        </View>
        <View style={styles.row}>
          <SmallButton title="Скасувати" onPress={() => { }} />
          <Text style={styles.slash}>/</Text>
          <SmallButton title="Перенести" onPress={() => { }} />
        </View>
      </Card>

      <Text style={styles.sectionTitle}>📊 ВАША АКТИВНІСТЬ:</Text>
      <Card>
        <View style={styles.statRow}><Text style={styles.statLabel}>Всього здач:</Text><Text style={styles.statValue}>2</Text></View>
        <View style={styles.statRow}><Text style={styles.statLabel}>За 12 місяців:</Text><Text style={styles.statValue}>2</Text></View>
        <View style={styles.statRow}><Text style={styles.statLabel}>За цей рік:</Text><Text style={styles.statValue}>2</Text></View>
      </Card>

      <View style={styles.centerInfo}>
        <Text style={styles.centerName}>🏥 Plasmaspende-Zentrum in Fulda</Text>
        <Text style={styles.centerAddress}>Адреса: Bahnhofstraße 2, 36037 Fulda</Text>
        <Text style={styles.centerPhone}>Номер телефону: 0661 4805000</Text>
      </View>

      <PrimaryButton title="ЗАПИСАТИСЯ НА ЗДАЧУ ПЛАЗМИ" onPress={() => navigation.navigate('Запис', { preselectedDate: 25 })} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingTop: 10,  
    paddingBottom: 20,
  },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#212121', marginBottom: 20, textAlign: 'center' },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', color: '#757575', marginBottom: 8, marginTop: 4, marginLeft: 14 },
  dateTimeRow: { marginBottom: 12 },
  dateText: { fontSize: 18, fontWeight: 'bold', color: '#212121' },
  row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 8 },
  slash: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  statLabel: { fontSize: 14, fontWeight: 'bold', color: '#212121', flex: 1 },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#212121' },
  centerInfo: { marginTop: 20, marginBottom: 16, alignItems: 'center' },
  centerName: { fontSize: 18, fontWeight: 'bold', color: '#D32F2F', marginBottom: 12 },
  centerAddress: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginBottom: 12 },
  centerPhone: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginBottom: 12 },
});