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
    title: 'Explore the World',
    description: 'Discover dream destinations at your fingertips.',
    image: require('../assets/onboarding/world.jpg'), // replace with your images
  },
  {
    id: '2',
    title: 'Plan with Ease',
    description: 'Effortlessly book flights, hotels, and more.',
    image: require('../assets/onboarding/plan.jpg'),
  },
  {
    id: '3',
    title: 'Live Every Moment',
    description: 'Capture and share unforgettable travel moments.',
    image: require('../assets/onboarding/eiffel.jpg'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      ref.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      navigation.replace('Register');
    }
  };

  const updateCurrentSlide = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentSlide(index);
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
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>
                  {currentSlide === slides.length - 1 ? 'Get Started for Free' : 'Next'}
                </Text>
              </TouchableOpacity>
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
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
