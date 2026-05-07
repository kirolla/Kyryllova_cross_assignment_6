import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import { fetchHealthTips } from '../constants/api';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface HealthTip {
  id: number;
  title: string;
  body: string;
}

export default function StatisticsScreen({ navigation }: any) {
  const { colors } = useTheme();
  const [tips, setTips] = useState<HealthTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTips();
  }, []);

  const loadTips = async () => {
    try {
      setLoading(true);
      const data = await fetchHealthTips();
      setTips(data);
    } catch (err) {
      setError('Не вдалося завантажити поради');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backArrow, { color: colors.textPrimary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Статистика</Text>
          <View style={styles.placeholder} />
        </View>

        <Card>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Середня тривалість циклу</Text>
          <Text style={[styles.statValue, { color: colors.primary }]}>28 днів</Text>
        </Card>

        <Card>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Наступні місячні</Text>
          <Text style={[styles.statDate, { color: colors.primary }]}>28 квітня 2026</Text>
        </Card>

        <Card>
          <Text style={[styles.historyTitle, { color: colors.textSecondary }]}>Історія циклів</Text>
          <Text style={[styles.historyItem, { color: colors.textSecondary }]}>- Січень 2026 – 29 днів</Text>
          <Text style={[styles.historyItem, { color: colors.textSecondary }]}>- Лютий 2026 – 27 днів</Text>
          <Text style={[styles.historyItem, { color: colors.textSecondary }]}>- Березень 2026 – 28 днів</Text>
          <Text style={[styles.historyItem, { color: colors.textSecondary }]}>- Квітень 2026 – 30 днів</Text>
        </Card>

        <Text style={[styles.tipsTitle, { color: colors.primary }]}>💡 КОРИСНІ ПОРАДИ:</Text>
        <Card>
          {loading ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : error ? (
            <View>
              <Text style={[styles.errorText, { color: colors.primary }]}>{error}</Text>
              <TouchableOpacity onPress={loadTips}>
                <Text style={[styles.retryText, { color: colors.link }]}>Спробувати ще раз</Text>
              </TouchableOpacity>
            </View>
          ) : (
            tips.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.tipItem, { borderBottomColor: colors.border }]}
                onPress={() => navigation.navigate('TipDetails', { title: item.title, body: item.body })}
              >
                <Text style={[styles.tipTitle, { color: colors.textPrimary }]}>{item.title.substring(0, 40)}</Text>
                <Text style={[styles.readMore, { color: colors.primary }]}>→</Text>
              </TouchableOpacity>
            ))
          )}
        </Card>
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
  statLabel: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 12 },
  statDate: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, textAlign: 'center' },
  historyTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, marginBottom: 12 },
  historyItem: { fontSize: 14, marginBottom: 6 },
  tipsTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, marginTop: 16, marginBottom: 8 },
  tipItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
  tipTitle: { fontSize: 14, flex: 1 },
  readMore: { fontSize: 18, marginLeft: 8 },
  errorText: { fontSize: 14, textAlign: 'center', marginBottom: 8 },
  retryText: { fontSize: 14, textAlign: 'center', fontWeight: FONT_WEIGHT.bold },
});