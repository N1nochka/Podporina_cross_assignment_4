import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import CustomHeader from '../components/CustomHeader';

export default function BonusesScreen({ navigation }: any) {
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
      <CustomHeader title="Бонуси та виплати" onBack={() => navigation.goBack()} />

      <Text style={styles.sectionTitle}>💰 ВИПЛАТА ЗА ЗДАЧУ:</Text>
      <Card>
        <View style={styles.payoutRow}>
          <Text style={styles.payoutLabel}>Одна здача:</Text>
          <Text style={styles.amount}>25€</Text>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>🎯 БОНУСНІ ПРОГРАМИ:</Text>

      <Card>
        <Text style={styles.bonusTitle}>📅 4 здачі за 28 днів</Text>
        <Text style={styles.bonusAmount}>Бонус: <Text style={styles.bonusRed}>+20€</Text></Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}><View style={[styles.progressFill, { width: '50%' }]} /></View>
          <Text style={styles.progressText}>2/4</Text>
        </View>
        <Text style={styles.bonusRemaining}>Ще 2 здачі до бонусу 20€</Text>
      </Card>

      <Card>
        <Text style={styles.bonusTitle}>📅 6 здач за 90 днів</Text>
        <Text style={styles.bonusAmount}>Бонус: <Text style={styles.bonusRed}>+30€</Text></Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}><View style={[styles.progressFill, { width: '33%' }]} /></View>
          <Text style={styles.progressText}>2/6</Text>
        </View>
        <Text style={styles.bonusRemaining}>Ще 4 здачі до бонусу 30€</Text>
      </Card>

      <Card>
        <Text style={styles.bonusTitle}>👥 ПРИВЕДИ ДРУГА</Text>
        <Text>За реєстрацію: 10€</Text>
        <Text>За 5 здач друга: 40€</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },
  contentContainer: { paddingTop: 10, paddingBottom: 20 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', color: '#757575', marginBottom: 8, marginTop: 16 },
  payoutRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  payoutLabel: { fontSize: 18, fontWeight: 'bold', color: '#212121' },
  amount: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
  bonusTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#212121' },
  bonusAmount: { fontSize: 16, fontWeight: 'bold', color: '#212121', marginBottom: 8 },
  bonusRed: { color: '#D32F2F' },
  progressContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 },
  progressBar: { flex: 1, height: 8, backgroundColor: '#FFCDD2', borderRadius: 4, marginRight: 12, overflow: 'hidden' },
  progressFill: { height: 8, backgroundColor: '#D32F2F', borderRadius: 4 },
  progressText: { fontSize: 14, fontWeight: 'bold', color: '#212121', width: 35, textAlign: 'right' },
  bonusRemaining: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginTop: 8 },
});