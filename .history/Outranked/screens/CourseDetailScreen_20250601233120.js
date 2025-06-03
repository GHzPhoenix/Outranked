import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;
  const navigation = useNavigation();

  const handleWatch = () => {
    if (course.premium) {
      Alert.alert("Premium Content", "This course is for premium users only.");
    } else {
      Alert.alert("Start Playing", "Course video will play here.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color="#00796b" />
      </TouchableOpacity>

      <Image source={course.thumbnail} style={styles.thumbnail} />

      <View style={styles.content}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.meta}>
          {course.author} • {course.role}
        </Text>

        <View style={styles.row}>
          <Text style={styles.difficulty}>{course.difficulty}</Text>
          {course.premium && (
            <View style={styles.premiumBadge}>
              <Ionicons name="lock-closed" size={16} color="#fff" />
              <Text style={styles.premiumText}> Premium</Text>
            </View>
          )}
        </View>

        <Text style={styles.description}>
          This course dives deep into techniques and mechanics to improve your
          gameplay. Learn tips, rotations, and lane control from expert players.
        </Text>

        <TouchableOpacity
          style={[
            styles.watchButton,
            course.premium && styles.disabledButton,
          ]}
          onPress={handleWatch}
          disabled={course.premium}
        >
          <Text style={styles.watchText}>
            {course.premium ? "Locked" : "Watch Now"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: "#fff",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#00796b",
  },
  meta: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  difficulty: {
    fontSize: 13,
    color: "#2ecc71",
    marginRight: 12,
  },
  premiumBadge: {
    flexDirection: "row",
    backgroundColor: "#e74c3c", // Deep red for premium
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  premiumText: {
    color: "#fff",
    marginLeft: 4,
  },
  description: {
    fontSize: 15,
    color: "#444",
    marginTop: 16,
    marginBottom: 24,
  },
  watchButton: {
    backgroundColor: "#00796b",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#b2dfdb", // light teal-gray
  },
  watchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
