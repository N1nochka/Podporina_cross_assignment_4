import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import OutlineButton from '../components/OutlineButton';

export default function SupportScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.title}>📞 Підтримка</Text>
                <Text style={styles.info}>Email: support@plasmadonate.com</Text>
                <Text style={styles.info}>Телефон: +380 44 123 4567</Text>
                <Text style={styles.info}>Години роботи: Пн-Пт 9:00-18:00</Text>
            </Card>
            <OutlineButton title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingTop: 60 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#212121', marginBottom: 20, textAlign: 'center' },
    info: { fontSize: 16, color: '#757575', marginBottom: 12 },
});