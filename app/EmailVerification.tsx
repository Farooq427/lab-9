import { View, Text } from 'react-native';
import StyledButton from '../components/StyledButton';

export default function EmailVerification() {
  return (
    <View style={{ flex: 1, backgroundColor: '#424242', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 10 }}>
        Verify Your Email
      </Text>
      <Text style={{ marginBottom: 12, color: '#ddd', fontSize: 15 }}>
        We have sent a verification link to your email. Please verify before proceeding.
      </Text>
      <StyledButton title="Open Email App" onPress={() => {}} />
    </View>
  );
}
