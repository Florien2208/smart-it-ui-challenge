import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const IllustrationContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 24px;
  margin-bottom: 32px;
  padding-horizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #4461f2;
  padding: 16px 32px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;

export default function UnderDevelopmentScreen() {
  const [animation] = React.useState(new Animated.Value(0));
const router = useRouter();
  React.useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(pulse).start();
  }, []);

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  });

  return (
    <Container>
      <IllustrationContainer>
        <Animated.View style={{ transform: [{ scale }] }}>
          <View style={{ alignItems: "center" }}>
            {/* Developer Icon Circle */}
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: "#4461F2",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Icon name="code" size={50} color="#fff" />
            </View>

            {/* Animated Dots */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              {[0, 1, 2].map((index) => (
                <View
                  key={index}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#4461F2",
                    margin: 4,
                    opacity: 0.6,
                  }}
                />
              ))}
            </View>
          </View>
        </Animated.View>
      </IllustrationContainer>

      <Title>saved Page Under Development</Title>
      <Description>
        We're working hard to bring you something amazing! This feature will be
        available soon with enhanced functionality and a great user experience.
      </Description>

      <Button onPress={() => router.push("/")}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <ButtonText>Go Back</ButtonText>
      </Button>
    </Container>
  );
}
