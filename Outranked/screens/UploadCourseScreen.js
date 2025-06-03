import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CourseContext } from '../contexts/CourseContext';
import { useNavigation } from '@react-navigation/native';


export default function UploadCourseScreen() {
  const { addCourse } = useContext(CourseContext);
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [role, setRole] = useState('');
  const [price, setPrice] = useState('');

  const handleUpload = () => {
    if (!title || !author || !price) {
      Alert.alert('Error', 'Please fill in title, author and price.');
      return;
    }
    addCourse({ title, author, difficulty, role, price: parseFloat(price) });
    Alert.alert(
      'Uploaded',
      `Course uploaded successfully. You will earn $${(0.9 * parseFloat(price)).toFixed(2)} per purchase.`
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload Course or Guide</Text>
   <TextInput
  placeholder="Title"
  placeholderTextColor="#00796b"
  value={title}
  onChangeText={setTitle}
  style={styles.input}
/>
<TextInput
  placeholder="Author"
  placeholderTextColor="#00796b"
  value={author}
  onChangeText={setAuthor}
  style={styles.input}
/>
<TextInput
  placeholder="Difficulty"
  placeholderTextColor="#00796b"
  value={difficulty}
  onChangeText={setDifficulty}
  style={styles.input}
/>
<TextInput
  placeholder="Role"
  placeholderTextColor="#00796b"
  value={role}
  onChangeText={setRole}
  style={styles.input}
/>
<TextInput
  placeholder="Price"
  placeholderTextColor="#00796b"
  value={price}
  onChangeText={setPrice}
  style={styles.input}
  keyboardType="numeric"
/>

      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      <Text style={styles.note}>Creators receive 90% of each sale. The platform keeps 10%.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: '#00796b',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  note: {
    marginTop: 20,
    color: '#555',
    fontStyle: 'italic',
  },
});