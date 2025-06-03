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
      style={styles.guideCardBox}
      onPress={() => navigation.navigate("GuideDetails", { guide: item })}
    >
      <Text style={styles.guideCardTitle}>{item.title}</Text>
      <Text style={styles.guideCardCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome Back, Summoner</Text>
      <Text style={styles.subheader}>Sharpen your skills and climb the ranks</Text>

      <Text style={styles.title}>Featured Champions</Text>
      <Text style={styles.subtitle}>
        Explore top picks from pro-level strategies and matchups.
      </Text>

      <FlatList
        horizontal
        data={featuredChampions}
        keyExtractor={(item) => item.id}
        renderItem={renderChampionCard}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 12 }}
      />

      <Text style={styles.title}>Latest Strategy Guides</Text>
      <Text style={styles.subtitle}>
        Updated guides to help you stay ahead of the meta.
      </Text>

      <FlatList
        horizontal
        data={guideData}
        keyExtractor={(item) => item.id}
        renderItem={renderGuideItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
      <View style={styles.dailyTipBox}>
  <Text style={styles.dailyTipText}>
    “Warding wins games. Control vision, control the map.”
  </Text>
</View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff6f2",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#00796b",
    marginBottom: 6,
  },
  subheader: {
    fontSize: 16,
    color: "#555",
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
    backgroundColor: "#2ecc71",
    marginRight: 6,
  },
  difficultyText: {
    color: "#fff",
    fontSize: 13,
  },

  // Guide card (new style)
  guideCardBox: {
    backgroundColor: "#1a1b3b",
    borderRadius: 16,
    width: 200,
    marginRight: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  guideCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffc832",
    textAlign: "center",
    marginBottom: 6,
  },
  guideCardCategory: {
    fontSize: 13,
    color: "#ccc",
    textAlign: "center",
  },
  dailyTipBox: {
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 16,
  marginTop: 20,
  flexDirection: "row",
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
},
dailyTipText: {
  fontSize: 14,
  color: "#333",
  marginLeft: 10,
  flex: 1,
  fontStyle: "italic",
},

});
