import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
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
  padding-bottom: 100px;
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
  margin-bottom: 16px;
`;

const JobCardsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
  border-radius: 8px;
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
  margin-bottom: 8px;
`;

const JobTypeContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
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
  margin-left: auto;
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
  return(
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header>
          <Greeting>Hello</Greeting>
          <Name>Leslie Alexander</Name>
          <NotificationIcon>
            <Icon name="bell" size={24} color="#fff" />
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
          <JobCardsContainer>
            <JobCard>
              <CompanyRow>
                <CompanyLogo
                  source={{ uri: "https://example.com/pinterest-logo.png" }}
                />
                <BookmarkButton>
                  <Icon name="bookmark-o" size={20} color="#666" />
                </BookmarkButton>
              </CompanyRow>
              <CompanyName>Pinterest, Inc.</CompanyName>
              <Location>California, USA</Location>
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
                <View>
                  <Salary>$7K</Salary>
                  <SalaryPeriod>/Month</SalaryPeriod>
                </View>
              </JobFooter>
            </JobCard>

            <JobCard>
              <CompanyRow>
                <CompanyLogo
                  source={{ uri: "https://example.com/facebook-logo.png" }}
                />
                <BookmarkButton>
                  <Icon name="bookmark-o" size={20} color="#666" />
                </BookmarkButton>
              </CompanyRow>
              <CompanyName>Facebook</CompanyName>
              <Location>California, USA</Location>
              <JobTitle>UI Designer</JobTitle>
              <JobTypeContainer>
                <JobTypeText>Senior</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Fulltime</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Remote</JobTypeText>
              </JobTypeContainer>
              <JobFooter>
                <ApplyButton>
                  <ApplyButtonText>Apply Now</ApplyButtonText>
                </ApplyButton>
                <View>
                  <Salary>$7K</Salary>
                  <SalaryPeriod>/Month</SalaryPeriod>
                </View>
              </JobFooter>
            </JobCard>
          </JobCardsContainer>

          <SectionTitle>Recent Job List</SectionTitle>
          <RecentJobCard>
            <CompanyLogo
              source={{ uri: "https://example.com/google-logo.png" }}
            />
            <RecentJobInfo>
              <JobTitle>Product Designer</JobTitle>
              <JobTypeContainer>
                <JobTypeText>Senior</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Fulltime</JobTypeText>
                <JobTypeText>•</JobTypeText>
                <JobTypeText>Remote</JobTypeText>
              </JobTypeContainer>
              <Salary>
                $5K<SalaryPeriod>/Month</SalaryPeriod>
              </Salary>
            </RecentJobInfo>
            <TimeAgo>12 Minute Ago</TimeAgo>
            <BookmarkButton>
              <Icon name="bookmark-o" size={20} color="#666" />
            </BookmarkButton>
          </RecentJobCard>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
