import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors'; 

export default function GuideDetailsScreen({ route }) {
  const { guide } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color={Colors.light.text} />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>{guide.title}</Text>
        <Text style={styles.category}>Category: {guide.category}</Text>
        <Text style={styles.description}>
          This is where the full guide content will appear. You can expand this
          screen to include videos, text tips, champion builds, combos, or other
          guide elements as needed.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 16,
    backgroundColor: Colors.light.card,
    padding: 6,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: Colors.light.icon,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});
