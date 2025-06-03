import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    Alert.alert('Logged out', 'You have been successfully logged out.');
    // Add actual logout logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Ionicons name="settings-outline" size={26} color="#2e86de" /> Settings
      </Text>

      <View style={styles.section}>
        <View style={styles.settingRow}>
          <View style={styles.rowLabel}>
            <Ionicons name="notifications-outline" size={20} color="#555" />
            <Text style={styles.settingText}>Enable Notifications</Text>
          </View>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.rowLabel}>
            <Ionicons name="moon-outline" size={20} color="#555" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f8',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
