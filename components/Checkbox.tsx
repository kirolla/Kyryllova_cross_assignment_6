import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { FONT_WEIGHT } from '../constants';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
}

export default function Checkbox({ label, checked, onPress }: CheckboxProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.checkbox, { borderColor: colors.border }, checked && { backgroundColor: colors.primary, borderColor: colors.primary }]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.label, { color: colors.textSecondary }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkmark: { color: '#FFFFFF', fontSize: 14, fontWeight: FONT_WEIGHT.bold },
  label: { fontSize: 14, fontWeight: FONT_WEIGHT.bold },
});