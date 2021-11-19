import LottieView from "lottie-react-native";
import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
          autoPlay
        />
      </AnimationWrapper>
      <Spacer size="large" position="bottom">
        <Title>Meals To Go</Title>
      </Spacer>
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
