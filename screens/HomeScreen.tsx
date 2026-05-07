import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function HomeScreen({ navigation }: any) {
  const { colors, isDarkMode } = useTheme();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, null, null, null];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <Text style={[styles.greeting, { color: colors.textPrimary }]}>Вітаємо, Анна! 👩</Text>

        <Card variant="pink" style={styles.cycleCard}>
          <Text style={[styles.cycleDayLabel, { color: colors.textSecondary }]}>День циклу</Text>
          <Text style={[styles.cycleDayNumber, { color: colors.primary }]}>14</Text>
          <Text style={[styles.cycleDayInfo, { color: colors.textSecondary }]}>Висока ймовірність овуляції</Text>
        </Card>

        <Card>
          <Text style={[styles.monthTitle, { color: colors.textPrimary }]}>Квітень 2026</Text>
          <View style={styles.weekDaysRow}>
            {weekDays.map(day => (
              <Text key={day} style={[styles.weekDayText, { color: colors.textSecondary }]}>{day}</Text>
            ))}
          </View>
          <View style={styles.datesGrid}>
            {dates.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateBox,
                  { borderColor: colors.border },
                  date !== null && selectedDate === date && styles.selectedDateBox,
                  date === null && styles.emptyDateBox
                ]}
                onPress={() => date !== null && setSelectedDate(date)}
                disabled={date === null}
              >
                {date !== null && (
                  <Text style={[styles.dateText, { color: colors.textPrimary }, selectedDate === date && { color: colors.primary }]}>
                    {date}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <PrimaryButton title="+ Додати запис" onPress={() => navigation.navigate('AddEntry')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 16 },
  greeting: { fontSize: TYPOGRAPHY.greeting, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 20, marginTop: 10 },
  cycleCard: { borderWidth: 1, borderColor: '#FCE4EC' },
  cycleDayLabel: { fontSize: 14, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 4 },
  cycleDayNumber: { fontSize: TYPOGRAPHY.cycleDay, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 4 },
  cycleDayInfo: { fontSize: 14, fontWeight: FONT_WEIGHT.bold, textAlign: 'center' },
  monthTitle: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 16 },
  weekDaysRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  weekDayText: { fontSize: 14, fontWeight: FONT_WEIGHT.bold, width: 40, textAlign: 'center' },
  datesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  dateBox: { width: 40, height: 40, borderWidth: 1, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  selectedDateBox: { borderWidth: 2, borderColor: '#E91E63' },
  emptyDateBox: { backgroundColor: 'transparent', borderColor: 'transparent' },
  dateText: { fontSize: 16, fontWeight: FONT_WEIGHT.bold },
});