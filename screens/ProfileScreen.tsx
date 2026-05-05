import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Card from '../components/Card';
import OutlineButton from '../components/OutlineButton';
import PlasmaIcon from '../components/PlasmaIcon';
import CustomHeader from '../components/CustomHeader';

export default function ProfileScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <CustomHeader title="Мій профіль" onBack={() => navigation.goBack()} />
      <PlasmaIcon size={60} />
      <Text style={styles.welcome}>Вітаємо, User!</Text>

      <Card>
        <Text style={styles.cardTitle}>👤 ОСОБИСТІ ДАНІ</Text>
        <View style={styles.historyRow}><Text>Номер донора: 101090</Text></View>
        <View style={styles.historyRow}><Text>Дата народження: 01.01.2000</Text></View>
        <View style={styles.historyRow}><Text>Email: user@gmail.com</Text></View>
        <View style={styles.historyRow}><Text>Телефон: +491712345678</Text></View>
        <View style={styles.historyRow}><Text>Адреса: Schloßstraße 1, 36030 Fulda</Text></View>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>📜 ІСТОРІЯ ЗДАЧ</Text>
        <View style={styles.historyRow}><Text>1) 01.03.2025</Text><Text>25€</Text></View>
        <View style={styles.historyRow}><Text>2) 29.03.2025</Text><Text>25€</Text></View>
        <Text style={styles.historyLink}>ВСЯ ІСТОРІЯ →</Text>
      </Card>

      <OutlineButton title="РЕДАГУВАТИ ПРОФІЛЬ" onPress={() => { }} />
      <OutlineButton
        title="ВИЙТИ"
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Auth' }],
            })
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },
  contentContainer: { paddingTop: 10, paddingBottom: 20 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#212121', marginBottom: 20, textAlign: 'center' },
  cardTitle: { fontSize: 12, fontWeight: 'bold', color: '#757575', marginBottom: 8 },
  historyRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  historyLink: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginTop: 8 },
});