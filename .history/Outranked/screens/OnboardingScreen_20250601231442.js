import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Master the Rift',
    description: 'Learn from top-tier guides to improve your gameplay.',
    image: require('../assets/onboarding/lol1.jpg'), // Replace with LoL themed image
  },
  {
    id: '2',
    title: 'Level Up Faster',
    description: 'Dominate your lane, win more games, and rank up.',
    image: require('../assets/onboarding/lol2.jpg'), // Replace with LoL themed image
  },
  {
    id: '3',
    title: 'Ready to Climb?',
    description: 'Choose your path to greatness.',
    image: require('../assets/onboarding/lol3.jpg'), // Replace with LoL themed image
    isFinal: true,
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlide = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentSlide(index);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      ref.current.scrollToIndex({ index: currentSlide + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={updateCurrentSlide}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>

              {item.isFinal ? (
                <View style={styles.finalButtons}>
                  <TouchableOpacity
                    style={[styles.button, styles.secondary]}
                    onPress={() => navigation.replace('Login')}
                  >
                    <Text style={styles.buttonText}>Log In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.primary]}
                    onPress={() => navigation.replace('Register')}
                  >
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity style={styles.primary} onPress={handleNext}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff6f2',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width,
    height: '65%',
    resizeMode: 'cover',
  },
  textContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  primary: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 10,
  },
  secondary: {
    backgroundColor: '#00796b',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  finalButtons: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});
