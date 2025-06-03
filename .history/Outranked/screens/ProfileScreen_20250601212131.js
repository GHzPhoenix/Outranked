import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const mockPurchases = [
  { id: '1', title: 'Darius Lane Guide', date: '2024-12-15' },
  { id: '2', title: 'Jungle Pathing Mastery', date: '2025-01-10' },
];

export default function ProfileScreen() {
  const [name, setName] = useState('John Doe');
  const [nickname, setNickname] = useState('Summoner123');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Nickname</Text>
      <TextInput
        value={nickname}
        onChangeText={setNickname}
        style={styles.input}
        placeholder="Enter your summoner name"
      />

      <Text style={styles.sectionHeader}>Purchase History</Text>
      <FlatList
        data={mockPurchases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.purchaseTitle}>{item.title}</Text>
              <Text style={styles.purchaseDate}>{item.date}</Text>
            </View>
            <Ionicons name="checkmark-done-outline" size={20} color="green" />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    marginBottom: 10,
  },
  purchaseItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  purchaseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  purchaseDate: {
    fontSize: 12,
    color: '#888',
  },
});
