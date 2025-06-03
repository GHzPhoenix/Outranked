import React, { useState } from "react";
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

  // Track if user has purchased the course (simulate)
  const [isPurchased, setIsPurchased] = useState(!course.premium);

  const handleWatch = () => {
    Alert.alert("Course Playing", "Course video will play here.");
  };

  const handlePurchase = () => {
    Alert.alert(
      "Purchase Guide",
      "Do you want to buy this premium guide?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Purchase",
          onPress: () => {
            setIsPurchased(true);
            Alert.alert("Success", "You now have access to the guide.");
          },
        },
      ]
    );
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

        {isPurchased ? (
          <TouchableOpacity style={styles.watchButton} onPress={handleWatch}>
            <Text style={styles.watchText}>Watch Now</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
            <Text style={styles.purchaseText}>Purchase Guide</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: "#e74c3c",
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
  watchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  purchaseButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  purchaseText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
