import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fetchHealthTips } from '../constants/api';
import Card from '../components/Card';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface TipItem {
  id: number;
  title: string;
  body: string;
}

export default function TipsScreen({ navigation }: any) {
  const { colors } = useTheme();
  const [tips, setTips] = useState<TipItem[]>([]);
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

  if (loading) {
    return (
      <SafeAreaView style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.textSecondary }]}>Завантаження порад...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.primary }]}>{error}</Text>
        <TouchableOpacity onPress={loadTips}>
          <Text style={[styles.retryText, { color: colors.link }]}>Спробувати ще раз</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>💡 Корисні поради</Text>
      </View>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TipDetails', { title: item.title, body: item.body })}>
            <Card>
              <Text style={[styles.tipTitle, { color: colors.textPrimary }]}>{item.title}</Text>
              <Text style={[styles.tipBody, { color: colors.textSecondary }]} numberOfLines={2}>{item.body}</Text>
              <Text style={[styles.readMore, { color: colors.primary }]}>Детальніше →</Text>
            </Card>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  listContainer: { paddingHorizontal: 16, paddingTop: 20 },
  header: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 8 },
  headerTitle: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center' },
  tipTitle: { fontSize: 18, fontWeight: FONT_WEIGHT.bold, marginBottom: 8 },
  tipBody: { fontSize: 14, marginBottom: 12 },
  readMore: { fontSize: 14, fontWeight: FONT_WEIGHT.bold },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 16 },
  errorText: { fontSize: 16, textAlign: 'center', marginBottom: 16 },
  retryText: { fontSize: 16, fontWeight: FONT_WEIGHT.bold },
});