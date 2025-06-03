import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import { AntDesign } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
  });

  const handleRegister = () => {
    if (!email || !password || !repeatPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Registered successfully!');
    navigation.navigate('Login');
  };

  const handleGoogleSignUp = async () => {
    const result = await promptAsync();
    if (result?.type === 'success') {
      Alert.alert('Google Sign-Up', 'Signed in successfully!');
      navigation.navigate('Main');
    }
  };

  const handleAppleSignUp = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      Alert.alert('Apple Sign-Up', `Welcome, ${credential.fullName?.givenName || 'user'}!`);
      navigation.navigate('Main');
    } catch (e) {
      if (e.code === 'ERR_CANCELED') return;
      Alert.alert('Apple Sign-Up Error', e.message);
    }
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

        <Text style={styles.altText}>or sign up with</Text>

        <TouchableOpacity style={[styles.socialButton, styles.google]} onPress={handleGoogleSignUp}>
          <AntDesign name="google" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={10}
            style={styles.appleButton}
            onPress={handleAppleSignUp}
          />
        )}

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
    backgroundColor: '#dff6f2',
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
  altText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
    marginVertical: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  google: {
    backgroundColor: '#db4437',
  },
  appleButton: {
    height: 44,
    marginBottom: 12,
    width: '100%',
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginPrompt: {
    marginTop: 20,
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
