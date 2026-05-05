import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomHeaderProps {
    title: string;
    onBack: () => void;
}

export default function CustomHeader({ title, onBack }: CustomHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
                <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: 40 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    backButton: { paddingRight: 16 },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
    title: { fontSize: 20, fontWeight: 'bold', color: '#000000', textAlign: 'center', flex: 1 },
});