import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const mockProgress = [
  {
    id: '1',
    title: 'Darius Top Lane Guide',
    progress: 0.8,
  },
  {
    id: '2',
    title: 'Jungle Pathing Mastery',
    progress: 0.5,
  },
  {
    id: '3',
    title: 'ADC Positioning Basics',
    progress: 1.0,
  },
];

export default function ProgressScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <ProgressBar
        progress={item.progress}
        color="#00796b"
        style={styles.progressBar}
      />
      <Text style={styles.percentage}>
        {Math.round(item.progress * 100)}%
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Ionicons name="stats-chart-outline" size={26} color="#00796b" /> My Progress
      </Text>
      <FlatList
        data={mockProgress}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
  item: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  progressBar: {
    height: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  percentage: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});
