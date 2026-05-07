import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SIZES, TYPOGRAPHY } from '../constants';

interface OutlineButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function OutlineButton({ title, onPress, disabled = false }: OutlineButtonProps) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const buttonWidth = Math.min(width * 0.85, 320);

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth, borderColor: colors.primary }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: colors.primary }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: SIZES.outlineButtonHeight,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
  },
  disabled: { opacity: 0.5 },
  text: { fontSize: TYPOGRAPHY.button, fontWeight: '600' },
});