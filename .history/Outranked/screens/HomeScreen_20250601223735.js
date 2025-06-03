import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const featuredChampions = [
  {
    id: "1",
    name: "Ambessa",
    role: "Matriarch of War",
    difficulty: "Average",
    icon: require("../assets/champs/ambessa.png"),
  },
  {
    id: "2",
    name: "Teemo",
    role: "The Swift Scout",
    difficulty: "Easy",
    icon: require("../assets/champs/teemo.png"),
  },
  {
    id: "3",
    name: "Swain",
    role: "The Noxian Grand General",
    difficulty: "Average",
    icon: require("../assets/champs/swain.png"),
  },
  {
    id: "4",
    name: "Smolder",
    role: "The Fiery Fledgling",
    difficulty: "Average",
    icon: require("../assets/champs/smolder.png"),
  },
];

const guideData = [
  { id: "1", title: "How to Win Lane with Darius", category: "Top Lane" },
  { id: "2", title: "Mastering Jungle Pathing", category: "Jungle" },
  { id: "3", title: "Best ADC Positioning Tips", category: "Bot Lane" },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderChampionCard = ({ item }) => (
    <TouchableOpacity style={styles.championCard}>
      <Image source={item.icon} style={styles.avatar} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardRole}>{item.role}</Text>
      <View style={styles.difficultyRow}>
        <View style={styles.difficultyDot} />
        <Text style={styles.difficultyText}>{item.difficulty}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderGuideItem = ({ item }) => (
    <TouchableOpacity
      style={styles.guideCard}
      onPress={() => navigation.navigate("GuideDetails", { guide: item })}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCategory}>{item.category}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#888" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to Outranked</Text>
      <Text style={styles.subheader}>Level up your League of Legends game</Text>

      <Text style={styles.title}>FEATURED CHAMPIONS</Text>
      <Text style={styles.subtitle}>
        Looking to try out a new champion? Here are some of our favorite picks!
      </Text>

      <FlatList
        horizontal
        data={featuredChampions}
        keyExtractor={(item) => item.id}
        renderItem={renderChampionCard}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 12 }}
      />

      <Text style={styles.title}>LATEST GUIDES</Text>

      <FlatList
        data={guideData}
        keyExtractor={(item) => item.id}
        renderItem={renderGuideItem}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecf4",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  subheader: {
    fontSize: 16,
    color: "#5e5e5e",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffc832",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },

  // Champion card styles
  championCard: {
    backgroundColor: "#1a1b3b",
    borderRadius: 16,
    width: 160,
    marginRight: 16,
    padding: 16,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffc832",
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 13,
    color: "#ccc",
    textAlign: "center",
  },
  difficultyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  difficultyDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#47afff",
    marginRight: 6,
  },
  difficultyText: {
    color: "#fff",
    fontSize: 13,
  },

  // Guide card styles (no image)
  guideCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f1f1f",
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    color: "#888",
  },
});
