import React from 'react';
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SIZES } from '../constants';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function InputField({ placeholder, value, onChangeText, secureTextEntry = false }: InputFieldProps) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const inputWidth = Math.min(width * 0.85, 320);

  return (
    <View style={[styles.container, { width: inputWidth }]}>
      <TextInput
        style={[styles.input, { backgroundColor: colors.white, borderColor: colors.border, color: colors.textPrimary }]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12, alignSelf: 'center' },
  input: {
    height: SIZES.inputHeight,
    borderWidth: 1,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: 16,
    fontSize: 14,
  },
});