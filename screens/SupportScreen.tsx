import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import OutlineButton from '../components/OutlineButton';
import { TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function SupportScreen({ navigation }: any) {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <View style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={[styles.backArrow, { color: colors.textPrimary }]}>←</Text>
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.textPrimary }]}>Підтримка</Text>
                    <View style={styles.placeholder} />
                </View>

                <Card>
                    <Text style={[styles.text, { color: colors.textSecondary }]}>Email: support@cycletrack.com</Text>
                    <Text style={[styles.text, { color: colors.textSecondary }]}>Телефон: +380 44 123 4567</Text>
                    <Text style={[styles.text, { color: colors.textSecondary }]}>Години роботи: Пн-Пт 9:00-18:00</Text>
                </Card>

                <OutlineButton title="Назад" onPress={() => navigation.goBack()} />
            </View>
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
    text: { fontSize: 16, marginBottom: 12 },
});