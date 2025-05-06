// app/SignupScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import StyledButton from '../components/StyledButton';
import { Link, router } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      router.push('/index'); // Redirect to login screen after sign up
    } catch (error) {
      setError('Failed to sign up. Please check your credentials.');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#424242' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#48CFCB', marginTop: 20 }}>DocVault</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#48CFCB', marginBottom: 12 }}>Sign Up</Text>
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
        <StyledButton title="Sign Up" onPress={handleSignUp} />
        <Link
          href="/index"
          style={{ color: '#48CFCB', marginTop: 10, textAlign: 'center', fontSize: 14 }}
        >
          Already have an account? Login
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
