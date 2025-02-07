import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const Header = styled.View`
  background-color: #4461f2;
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 80px;
`;

const Greeting = styled.Text`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4px;
`;

const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

const NotificationIcon = styled.View`
  position: absolute;
  right: 20px;
  top: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 12px;
`;

const SearchContainer = styled.View`
  margin: -50px 20px 0;
  z-index: 1;
`;

const SearchBar = styled.View`
  background-color: #fff;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 5;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
  margin-left: 12px;
`;

const ContentContainer = styled.View`
  padding: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

const JobCard = styled.View`
  background-color: #f6f7fb;
  border-radius: 16px;
  padding: 16px;
  width: 48%;
  margin-bottom: 16px;
`;

const CompanyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CompanyLogo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const BookmarkButton = styled.TouchableOpacity`
  padding: 8px;
`;

const CompanyName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
`;

const Location = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const JobTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 12px;
  margin-top:20px;
`;

const JobTypeContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const JobTypeText = styled.Text`
  color: #666;
  font-size: 14px;
  margin-right: 8px;
`;

const JobFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ApplyButton = styled.TouchableOpacity`
  background-color: #4461f2;
  padding: 12px 24px;
  border-radius: 12px;
`;

const ApplyButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

const Salary = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const SalaryPeriod = styled.Text`
  font-size: 14px;
  color: #666;
`;

const RecentJobCard = styled.View`
  background-color: #f6f7fb;
  border-radius: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const RecentJobInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const TimeAgo = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: auto;
`;
const JobCardsContainer = styled(ScrollView)`
  flex: 1;
`;
const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
`;
type NavigationProps = {
  navigation: NavigationProp<ParamListBase>;
};
export default function HomeScreen() {
  const router = useRouter();
  return (
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header>
          <Greeting>Hello</Greeting>
          <Name>Leslie Alexander</Name>
          <NotificationIcon>
            <View style={{ position: "relative" }}>
              <Icon name="bell-o" size={24} color="#fff" />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FF4444",
                  borderRadius: 4,
                }}
              />
            </View>
          </NotificationIcon>
        </Header>

        <SearchContainer>
          <SearchBar>
            <Icon name="search" size={20} color="#666" />
            <SearchInput
              placeholder="Search job, company, etc..."
              placeholderTextColor="#666"
            />
          </SearchBar>
        </SearchContainer>

        <ContentContainer>
          <SectionTitle>Recomendation</SectionTitle>
          <JobCardsContainer
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              gap: 16,
            }}
          >
            <JobCard style={{ width: 250 }}>
              <CompanyRow>
                <CompanyLogo source={require("@/assets/images/download.png")} />
                <View style={{ flex: 1, marginLeft: 18 }}>
                  <CompanyName>Pinterest, Inc.</CompanyName>
                  <Location>California, USA</Location>
                </View>
                <BookmarkButton>
                  <Icon name="bookmark-o" size={20} color="#666" />
                </BookmarkButton>
              </CompanyRow>

              <JobTitle>Motion Designer</JobTitle>
              <JobTypeContainer>
                <JobTypeText>Senior</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Fulltime</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Remote</JobTypeText>
              </JobTypeContainer>
              <JobFooter>
                <ApplyButton onPress={() => router.push("/job_detail")}>
                  <ApplyButtonText>Apply Now</ApplyButtonText>
                </ApplyButton>

                <Salary
                  style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}
                >
                  $7K
                  <SalaryPeriod style={{ fontSize: 14, color: "#666" }}>
                    /Month
                  </SalaryPeriod>
                </Salary>
              </JobFooter>
            </JobCard>

            <JobCard style={{ width: 250 }}>
              <CompanyRow>
                <CompanyLogo source={require("@/assets/images/facebook.png")} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <CompanyName>Facebook</CompanyName>
                  <Location>California, USA</Location>
                </View>
                <BookmarkButton>
                  <Icon name="bookmark-o" size={20} color="#666" />
                </BookmarkButton>
              </CompanyRow>
              <JobTitle>UI Designer</JobTitle>
              <JobTypeContainer>
                <JobTypeText>Senior</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Fulltime</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Remote</JobTypeText>
              </JobTypeContainer>
              <JobFooter>
                <ApplyButton onPress={() => router.push("/job_detail")}>
                  <ApplyButtonText>Apply Now</ApplyButtonText>
                </ApplyButton>
                <Salary
                  style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}
                >
                  $7K
                  <SalaryPeriod style={{ fontSize: 14, color: "#666" }}>
                    /Month
                  </SalaryPeriod>
                </Salary>
              </JobFooter>
            </JobCard>
          </JobCardsContainer>

          <SectionTitle>Recent Job List</SectionTitle>
          <View
            style={{
              backgroundColor: "#F6F7FB",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <CompanyLogo
                  source={require("@/assets/images/google-logo.webp")}
                />
                <View style={{ marginLeft: 12 }}>
                  <JobTitle style={{ fontSize: 16, marginBottom: 4 }}>
                    Product Designer
                  </JobTitle>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#666", fontSize: 14 }}>Senior</Text>
                    <Text style={{ color: "#666", marginHorizontal: 4 }}>
                      •
                    </Text>
                    <Text style={{ color: "#666", fontSize: 14 }}>
                      Fulltime
                    </Text>
                    <Text style={{ color: "#666", marginHorizontal: 4 }}>
                      •
                    </Text>
                    <Text style={{ color: "#666", fontSize: 14 }}>Remote</Text>
                  </View>
                </View>
              </View>
              <BookmarkButton>
                <Icon name="bookmark-o" size={20} color="#666" />
              </BookmarkButton>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
                marginLeft: 50,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                $5K<Text style={{ fontSize: 14, color: "#666" }}>/Month</Text>
              </Text>
              <TimeAgo>12 Minute Ago</TimeAgo>
            </View>
          </View>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
