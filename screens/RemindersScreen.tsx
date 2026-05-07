import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import { RootState } from '../store';
import { addReminder, removeReminder, toggleReminder } from '../store/remindersSlice';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function RemindersScreen({ navigation }: any) {
  const { colors } = useTheme();
  const reminders = useSelector((state: RootState) => state.reminders.items);
  const dispatch = useDispatch();

  const handleAddTestReminder = () => {
    dispatch(addReminder({
      id: Date.now(),
      title: 'Тестове нагадування',
      date: new Date().toLocaleDateString(),
      time: '10:00',
      completed: false,
    }));
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backArrow, { color: colors.textPrimary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Нагадування</Text>
          <View style={styles.placeholder} />
        </View>

        <PrimaryButton title="➕ Додати тестове нагадування" onPress={handleAddTestReminder} />

        {reminders.length === 0 ? (
          <Card>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>У вас поки немає нагадувань</Text>
          </Card>
        ) : (
          reminders.map((item) => (
            <Card key={item.id}>
              <View style={styles.itemRow}>
                <TouchableOpacity style={styles.checkbox} onPress={() => dispatch(toggleReminder(item.id))}>
                  <View style={[styles.checkboxCircle, { borderColor: colors.primary }, item.completed && { backgroundColor: colors.primary }]}>
                    {item.completed && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                </TouchableOpacity>
                <View style={styles.itemInfo}>
                  <Text style={[styles.itemTitle, { color: colors.textPrimary }, item.completed && { textDecorationLine: 'line-through', color: colors.textLight }]}>{item.title}</Text>
                  <Text style={[styles.itemDate, { color: colors.textSecondary }]}>{item.date} • {item.time}</Text>
                </View>
                <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(removeReminder(item.id))}>
                  <Text style={styles.deleteText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </Card>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backButton: { padding: 4 },
  backArrow: { fontSize: 24, fontWeight: FONT_WEIGHT.bold },
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', flex: 1 },
  placeholder: { width: 30 },
  emptyText: { textAlign: 'center', fontSize: 16, paddingVertical: 20 },
  itemRow: { flexDirection: 'row', alignItems: 'center' },
  checkbox: { marginRight: 12 },
  checkboxCircle: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
  checkmark: { color: '#FFFFFF', fontSize: 14, fontWeight: FONT_WEIGHT.bold },
  itemInfo: { flex: 1 },
  itemTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, marginBottom: 4 },
  itemDate: { fontSize: 12 },
  deleteButton: { padding: 8 },
  deleteText: { fontSize: 18 },
});