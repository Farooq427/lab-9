// app/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import StyledButton from '../components/StyledButton';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Navigate based on user role or email
      if (user.email === 'admin@example.com') {
        router.push('/AdminPanel');  // Navigate to admin panel
      } else {
        router.push('/Dashboard');  // Navigate to dashboard for regular users
      }
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#424242' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#48CFCB', marginTop: 20 }}>DocVault</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 12 }}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#bbb"
          style={inputStyle}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#bbb"
          style={inputStyle}
        />
        {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
        <StyledButton title="Login" onPress={handleLogin} />
        <Link
          href="/SignupScreen"
          style={{ color: '#48CFCB', marginTop: 10, textAlign: 'center', fontSize: 14 }}
        >
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
