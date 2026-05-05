import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import CustomHeader from '../components/CustomHeader';

export default function DonateScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, null, null, null];
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];

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
      <CustomHeader title="Запис на здачу плазми" onBack={() => navigation.goBack()} />

      <Card>
        <Text style={styles.cardTitle}>📅 ОБЕРІТЬ ДАТУ:</Text>
        <View style={styles.calendarHeader}>
          <TouchableOpacity><Text style={styles.arrowBlack}>{'<'}</Text></TouchableOpacity>
          <Text style={styles.monthTitleBlack}>КВІТЕНЬ 2026</Text>
          <TouchableOpacity><Text style={styles.arrowBlack}>{'>'}</Text></TouchableOpacity>
        </View>
        <View style={styles.weekDaysRow}>
          {weekDays.map(day => <Text key={day} style={styles.weekDayTextBold}>{day}</Text>)}
        </View>
        <View style={styles.datesGrid}>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dateBoxBig, date !== null && selectedDate === date && styles.selectedDateBoxBig, date === null && styles.emptyDateBox]}
              onPress={() => date !== null && setSelectedDate(date)}
              disabled={date === null}
            >
              {date !== null && <Text style={[styles.dateTextBig, selectedDate === date && styles.selectedDateTextBig]}>{date}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>⏰ ОБЕРІТЬ ЧАС:</Text>
        <View style={styles.timeGrid}>
          {times.map(time => (
            <TouchableOpacity key={time} style={[styles.timeBoxBig, selectedTime === time && styles.selectedTimeBoxBig]} onPress={() => setSelectedTime(time)}>
              <Text style={[styles.timeTextBig, selectedTime === time && styles.selectedTimeTextBig]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <PrimaryButton title="ПІДТВЕРДИТИ ЗАПИС" onPress={() => { }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },
  contentContainer: { paddingTop: 10, paddingBottom: 20 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#757575', marginBottom: 6 },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  arrowBlack: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
  monthTitleBlack: { fontSize: 20, fontWeight: 'bold', color: '#000000' },
  weekDaysRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  weekDayTextBold: { fontSize: 14, fontWeight: 'bold', color: '#757575', width: 44, textAlign: 'center' },
  datesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
  dateBoxBig: { width: 40, height: 40, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', margin: 2 },
  selectedDateBoxBig: { borderColor: '#D32F2F', borderWidth: 2, backgroundColor: '#FFEBEE' },
  emptyDateBox: { backgroundColor: 'transparent', borderColor: 'transparent' },
  dateTextBig: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
  selectedDateTextBig: { color: '#D32F2F' },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
  timeBoxBig: { width: 90, height: 44, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', margin: 4 },
  selectedTimeBoxBig: { borderColor: '#D32F2F', borderWidth: 2, backgroundColor: '#FFEBEE' },
  timeTextBig: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
  selectedTimeTextBig: { color: '#D32F2F' },
});