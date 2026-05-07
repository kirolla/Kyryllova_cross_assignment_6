import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import Card from '../components/Card';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface AuthScreenProps {
  onLogin?: () => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const { colors } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <Text style={[styles.logo, { color: colors.primary }]}>CycleTrack</Text>
        <Text style={styles.icon}>🌸</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>Відстежуйте свій цикл легко та зручно</Text>

        <Card>
          <Text style={[styles.title, { color: colors.textPrimary }]}>{isLogin ? 'Вхід' : 'Реєстрація'}</Text>
          <InputField placeholder="Email" value={email} onChangeText={setEmail} />
          <InputField placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry />

          {!isLogin && (
            <>
              <InputField placeholder="Ім'я" value={firstName} onChangeText={setFirstName} />
              <InputField placeholder="Прізвище" value={lastName} onChangeText={setLastName} />
            </>
          )}

          <PrimaryButton title={isLogin ? "Увійти" : "Зареєструватися"} onPress={onLogin || (() => { })} />

          <Text style={[styles.orText, { color: colors.textLight }]}>Або</Text>

          <OutlineButton
            title={isLogin ? "Зареєструватися" : "Увійти"}
            onPress={() => setIsLogin(!isLogin)}
          />

          <TouchableOpacity>
            <Text style={[styles.skipLink, { color: colors.link }]}>Пропустити →</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 16 },
  logo: { fontSize: TYPOGRAPHY.logo, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginTop: 60, marginBottom: 16 },
  icon: { fontSize: 64, textAlign: 'center', marginBottom: 16 },
  description: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 40 },
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 20 },
  orText: { fontSize: TYPOGRAPHY.small, textAlign: 'center', marginVertical: 12 },
  skipLink: { fontSize: TYPOGRAPHY.small, textAlign: 'center', marginTop: 16 },
});