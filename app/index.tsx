import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { Link, router } from 'expo-router';
import StyledButton from '../components/StyledButton';

export default function LoginScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#424242' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#48CFCB', marginTop: 20 }}>DocVault</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 12 }}>Login</Text>
        <TextInput placeholder="Email" placeholderTextColor="#bbb" style={inputStyle} />
        <TextInput placeholder="Password" secureTextEntry placeholderTextColor="#bbb" style={inputStyle} />
        <StyledButton title="Login" onPress={() => router.push('/Dashboard')} />
        <Link href="/SignupScreen.tsx" style={{ color: '#48CFCB', marginTop: 10, textAlign: 'center', fontSize: 14 }}>
          Don't have an account? Sign up
        </Link>
      </View>
    </ScrollView>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: '#48CFCB',
  padding: 14,
  marginBottom: 12,
  borderRadius: 10,
  color: 'white',
  backgroundColor: '#555',
};
