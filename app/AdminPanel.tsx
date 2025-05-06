import { View, Text } from 'react-native';
import StyledButton from '../components/StyledButton';

export default function AdminPanel() {
  return (
    <View style={{ flex: 1, backgroundColor: '#424242', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 10 }}>Admin Panel</Text>
      <StyledButton title="View All Users" onPress={() => {}} />
      <StyledButton title="View All Uploads" onPress={() => {}} />
    </View>
  );
}
