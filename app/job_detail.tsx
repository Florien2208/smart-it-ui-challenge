import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const CompanyLogoContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 180px;
  margin-left: -40px;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 5;
`;

const CompanyLogo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
`;

const ContentContainer = styled.View`
  padding: 20px;
  margin-top: 60px;
`;

const JobTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #000;
  margin-bottom: 8px;
`;

const Location = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  margin-bottom: 24px;
`;

const Tab = styled.TouchableOpacity`
  padding: 12px 24px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => (props.active ? "#4461F2" : "transparent")};
`;

const TabText = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.active ? "#4461F2" : "#666")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const ResponsibilityText = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
  line-height: 24px;
`;

const SkillsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const SkillItem = styled.Text`
  font-size: 16px;
  color: #666;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const BottomContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #eee;
  background-color: white;
`;

const ApplyButton = styled.TouchableOpacity`
  background-color: #4461f2;
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin-right: 12px;
`;

const ApplyButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ChatButton = styled.TouchableOpacity`
  background-color: #f6f7fb;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 54px;
`;

export default function JobDetailsScreen({ navigation }) {
  const [activeTab, setActiveTab] = React.useState("Description");

  return (
    <Container>
      <ScrollView>
        <HeaderImage
          source={{ uri: "https://example.com/office-image.jpg" }}
          resizeMode="cover"
        />
        <CompanyLogoContainer>
          <CompanyLogo
            source={{ uri: "https://example.com/google-logo.png" }}
          />
        </CompanyLogoContainer>

        <ContentContainer>
          <JobTitle>Product Designer</JobTitle>
          <Location>California, USA</Location>

          <TabContainer>
            {["Description", "Company", "Aplicant", "Salary"].map((tab) => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onPress={() => setActiveTab(tab)}
              >
                <TabText active={activeTab === tab}>{tab}</TabText>
              </Tab>
            ))}
          </TabContainer>

          {activeTab === "Description" && (
            <>
              <SectionTitle>Job Responsibilities</SectionTitle>
              <ResponsibilityText>
                • Deliver a well-crafted design that follows standard for
                consistency in quality and experience.
              </ResponsibilityText>
              <ResponsibilityText>
                • Design creative solutions that deliver not only value customer
                but also solve business objectives.
              </ResponsibilityText>
              <ResponsibilityText>
                • You are also required to contribute to the design and critics,
                conceptual discussion, and also maintaining consistency of
                design system.
              </ResponsibilityText>

              <SectionTitle style={{ marginTop: 24 }}>
                Skills Needed
              </SectionTitle>
              <SkillsContainer>
                {["Lead", "Ux Design", "Problem Solving", "Critical"].map(
                  (skill) => (
                    <SkillItem key={skill}>• {skill}</SkillItem>
                  )
                )}
              </SkillsContainer>
            </>
          )}
        </ContentContainer>
      </ScrollView>

      <BottomContainer>
        <ApplyButton>
          <ApplyButtonText>Apply Now</ApplyButtonText>
        </ApplyButton>
        <ChatButton>
          <Icon name="comment" size={24} color="#4461F2" />
        </ChatButton>
      </BottomContainer>
    </Container>
  );
}
