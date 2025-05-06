// app/AdminPanel.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StyledButton from '../components/StyledButton';

export default function AdminPanel() {
  return (
    <ScrollView style={{ backgroundColor: '#424242' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 10 }}>Admin Panel</Text>
        <StyledButton title="View All Users" onPress={() => {}} />
        <StyledButton title="View All Uploads" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
