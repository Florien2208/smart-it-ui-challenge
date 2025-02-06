import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4461F2",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 60,
          paddingBottom: Platform.OS === "ios" ? 28 : 8,
          paddingTop: 8,
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          borderTopWidth: 1,
          position: Platform.OS === "ios" ? "absolute" : undefined,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="line-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
