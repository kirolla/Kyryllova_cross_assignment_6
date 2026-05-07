import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SIZES, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({ title, onPress, disabled = false }: PrimaryButtonProps) => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const buttonWidth = Math.min(width * 0.85, 320);

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth, backgroundColor: colors.primary }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: colors.white }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.buttonHeight,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  disabled: { opacity: 0.5 },
  text: { fontSize: TYPOGRAPHY.button, fontWeight: FONT_WEIGHT.bold },
});

export default PrimaryButton;