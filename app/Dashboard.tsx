import { View, Text } from 'react-native';
import StyledButton from '../components/StyledButton';
import { router } from 'expo-router';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: '#424242', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 10 }}>Dashboard</Text>
      <StyledButton title="Upload Document" onPress={() => {}} />
      <StyledButton title="View My Documents" onPress={() => {}} />
      <StyledButton title="Logout" onPress={() => router.replace('/')} />
    </View>
  );
}
