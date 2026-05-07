// screens/TipDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function TipDetailsScreen({ route, navigation }: any) {
  const { title, body } = route.params;
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backArrow, { color: colors.textPrimary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Деталі поради</Text>
          <View style={styles.placeholder} />
        </View>

        <Card>
          <Text style={[styles.tipTitle, { color: colors.textPrimary }]}>{title}</Text>
          <Text style={[styles.tipBody, { color: colors.textSecondary }]}>{body}</Text>
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
  tipTitle: { fontSize: 18, fontWeight: FONT_WEIGHT.bold, marginBottom: 12 },
  tipBody: { fontSize: 14, lineHeight: 22 },
});