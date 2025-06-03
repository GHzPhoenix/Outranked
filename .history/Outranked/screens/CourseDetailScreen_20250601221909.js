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

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;

  const handleWatch = () => {
    if (course.premium) {
      Alert.alert("Premium Content", "This course is for premium users only.");
    } else {
      Alert.alert("Start Playing", "Course video will play here.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={course.thumbnail} style={styles.thumbnail} />

      <View style={styles.content}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.meta}>{course.author} • {course.role}</Text>

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
          This course dives deep into techniques and mechanics to improve your gameplay. Learn tips, rotations, and lane control from expert players.
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
    color: "#007bff",
    marginRight: 12,
  },
  premiumBadge: {
    flexDirection: "row",
    backgroundColor: "#e63946",
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
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  watchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
