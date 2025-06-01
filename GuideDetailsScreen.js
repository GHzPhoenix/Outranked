import { StyleSheet, Text, View } from 'react-native';

export default function GuideDetailsScreen({ route }) {
  const { guide } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guide.title}</Text>
      <Text style={styles.category}>Category: {guide.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold' },
  category: { fontSize: 16, color: '#666', marginTop: 12 },
});
