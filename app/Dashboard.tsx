// app/Dashboard.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StyledButton from '../components/StyledButton';

export default function Dashboard() {
  return (
    <ScrollView style={{ backgroundColor: '#424242' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 10 }}>Dashboard</Text>
        <StyledButton title="Upload Document" onPress={() => {}} />
        <StyledButton title="View My Documents" onPress={() => {}} />
        <StyledButton title="Logout" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
