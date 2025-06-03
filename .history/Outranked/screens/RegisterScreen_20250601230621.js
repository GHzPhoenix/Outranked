import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !repeatPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registered successfully!');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.header}>Create account</Text>
        <Text style={styles.subheader}>Please enter your details</Text>

        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#7f8c8d"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat password"
          placeholderTextColor="#7f8c8d"
          secureTextEntry
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.loginPrompt}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.loginBox}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff6f2', // soft blue-green background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 6,
  },
  subheader: {
    fontSize: 14,
    color: '#777',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: '#00796b',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginPrompt: {
    marginTop: 30,
    textAlign: 'center',
    color: '#555',
  },
  loginBox: {
    backgroundColor: '#e0f2f1',
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#00796b',
    fontSize: 16,
    fontWeight: '600',
  },
});
