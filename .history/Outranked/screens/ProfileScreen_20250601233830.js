import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const purchases = [
  { id: '1', title: 'Top Lane Guide - Darius', date: '2024-12-15' },
  { id: '2', title: 'Jungle Pathing Mastery', date: '2025-01-10' },
];

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(true);
  const [faceID, setFaceID] = useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: () => navigation.reset({
          index: 0,
          routes: [{ name: 'Onboarding' }],
        }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Summoner123</Text>
        <Text style={styles.email}>summoner@outranked.gg</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* Purchases */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Purchases</Text>
        {purchases.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Ionicons name="book-outline" size={20} color="#444" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingRow}>
          <Ionicons name="notifications-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Push Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            style={{ marginLeft: 'auto' }}
          />
        </View>

        <View style={styles.settingRow}>
          <Ionicons name="finger-print-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Face ID</Text>
          <Switch
            value={faceID}
            onValueChange={setFaceID}
            style={{ marginLeft: 'auto' }}
          />
        </View>

        <TouchableOpacity style={styles.settingRow}>
          <Ionicons name="key-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={18} color="#e74c3c" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f8',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  editButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 10,
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 12,
  },
  logoutText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: '600',
  },
});
