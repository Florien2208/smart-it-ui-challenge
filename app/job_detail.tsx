import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function JobDetailsScreen() {
  const [activeTab, setActiveTab] = React.useState("Description");
const router = useRouter();
  const tabs = ["Description", "Company", "Aplicant", "Salary"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image
            source={require("@/assets/images/recruitment-marketing-blog-header-1.png")}
            style={{ width: "100%", height: 220 }}
            resizeMode="cover"
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              backgroundColor: "white",
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
            onPress={() => router.push("/")}
          >
            <Icon name="arrow-left" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            left: "50%",
            top: 180,
            marginLeft: -30,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 80,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Image
            source={require("@/assets/images/google-logo.webp")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>

        <View style={{ padding: 20, marginTop: 60 }}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: "700",
              textAlign: "center",
              color: "#000",
              marginBottom: 8,
            }}
          >
            Product Designer
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: "#666",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            California, USA
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              marginBottom: 24,
            }}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={{
                  flex: 1,
                  padding: 1,
                  borderBottomWidth: 2,
                  borderBottomColor:
                    activeTab === tab ? "#4461F2" : "transparent",
                }}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    color: activeTab === tab ? "#4461F2" : "#666",
                    fontWeight: activeTab === tab ? "600" : "normal",
                  }}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "Description" && (
            <>
              <Text
                style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}
              >
                Job Responsibilities
              </Text>

              {[
                "Deliver a well-crafted design that follows standard for consistency in quality and experience.",
                "Design creative solutions that deliver not only value customer but also solve business objectives.",
                "You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.",
              ].map((responsibility, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 16,
                    color: "#666",
                    marginBottom: 16,
                    lineHeight: 24,
                  }}
                >
                  • {responsibility}
                </Text>
              ))}

              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "700",
                  marginTop: 24,
                  marginBottom: 16,
                }}
              >
                Skills Needed
              </Text>

              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {["Lead", "UX Design", "Problem Solving", "Critical"].map(
                  (skill) => (
                    <Text key={skill} style={{ fontSize: 16, color: "#666" }}>
                      • {skill}
                    </Text>
                  )
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          backgroundColor: "white",
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#4461F2",
            padding: 16,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Apply Now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#F6F7FB",
            padding: 16,
            borderRadius: 12,
            width: 54,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="comment" size={24} color="#4461F2" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
