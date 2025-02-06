import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  // Mock user data - in a real app, this would come from props or state
  const user = {
    name: "Sarah Johnson",
    role: "Senior Product Designer",
    location: "San Francisco, CA",
    followers: 1234,
    following: 567,
    projects: 48,
    bio: "Passionate about creating beautiful and functional user experiences. Leading design at TechCorp.",
    skills: [
      "UI/UX Design",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Team Leadership",
    ],
    stats: [
      { label: "Projects", value: "48" },
      { label: "Reviews", value: "126" },
      { label: "Clients", value: "29" },
    ],
  };

  const StatBox = ({ label, value }) => (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const SkillTag = ({ skill }) => (
    <View style={styles.skillTag}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit" size={20} color="#FFF" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="settings" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={16} color="#666" />
          <Text style={styles.location}>{user.location}</Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {user.stats.map((stat, index) => (
          <StatBox key={index} label={stat.label} value={stat.value} />
        ))}
      </View>

      {/* Bio Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {user.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  editButtonText: {
    color: "#FFF",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  iconButton: {
    padding: 8,
  },
  userInfo: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 4,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: "#333",
    fontSize: 14,
  },
});

export default ProfileScreen;
