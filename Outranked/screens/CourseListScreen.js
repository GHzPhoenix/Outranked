import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CourseCard from "../components/CourseCard";
import { CourseContext } from "../contexts/CourseContext";

export default function CourseListScreen() {
  const navigation = useNavigation();
  const { courses } = useContext(CourseContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard
            course={item}
            onPress={() => navigation.navigate("CourseDetail", { course: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
