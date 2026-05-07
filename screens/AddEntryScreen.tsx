import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import Checkbox from '../components/Checkbox';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function AddEntryScreen({ navigation }: any) {
  const { colors } = useTheme();
  const [symptoms, setSymptoms] = useState({
    pain: false,
    headache: false,
    bloating: false,
    breastTenderness: false,
    moodSwings: false,
  });
  const [discharge, setDischarge] = useState<string | null>(null);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backArrow, { color: colors.textPrimary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Додати запис</Text>
          <View style={styles.placeholder} />
        </View>

        <Card>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>Симптоми</Text>
          <Checkbox label="Біль унизу живота" checked={symptoms.pain} onPress={() => setSymptoms({ ...symptoms, pain: !symptoms.pain })} />
          <Checkbox label="Головний біль" checked={symptoms.headache} onPress={() => setSymptoms({ ...symptoms, headache: !symptoms.headache })} />
          <Checkbox label="Здуття" checked={symptoms.bloating} onPress={() => setSymptoms({ ...symptoms, bloating: !symptoms.bloating })} />
          <Checkbox label="Нагрубання грудей" checked={symptoms.breastTenderness} onPress={() => setSymptoms({ ...symptoms, breastTenderness: !symptoms.breastTenderness })} />
          <Checkbox label="Перепади настрою" checked={symptoms.moodSwings} onPress={() => setSymptoms({ ...symptoms, moodSwings: !symptoms.moodSwings })} />
        </Card>

        <Card>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>Настрій</Text>
          <Text style={styles.emojiRow}>😊 😐 😢 😡</Text>
        </Card>

        <Card>
          <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>Виділення</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('рідкі')}>
              <View style={[styles.radioCircle, { borderColor: colors.primary }, discharge === 'рідкі' && { backgroundColor: colors.primary }]} />
              <Text style={[styles.radioText, { color: colors.textSecondary }]}>Рідкі</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('густі')}>
              <View style={[styles.radioCircle, { borderColor: colors.primary }, discharge === 'густі' && { backgroundColor: colors.primary }]} />
              <Text style={[styles.radioText, { color: colors.textSecondary }]}>Густі</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('кров\'янисті')}>
              <View style={[styles.radioCircle, { borderColor: colors.primary }, discharge === 'кров\'янисті' && { backgroundColor: colors.primary }]} />
              <Text style={[styles.radioText, { color: colors.textSecondary }]}>Кров'янисті</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <PrimaryButton title="Зберегти" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backButton: { padding: 4 },
  backArrow: { fontSize: 24, fontWeight: FONT_WEIGHT.bold },
  title: { fontSize: 20, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', flex: 1 },
  placeholder: { width: 30 },
  cardTitle: { fontSize: 18, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 12 },
  emojiRow: { fontSize: TYPOGRAPHY.emoji, textAlign: 'center' },
  radioGroup: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8, gap: 20 },
  radioOption: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, backgroundColor: 'transparent' },
  radioText: { fontSize: 14, fontWeight: FONT_WEIGHT.bold },
});