import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const { isLoading, error, onRegister } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Spacer size="large" position="bottom">
        <Title>Meals To Go</Title>
      </Spacer>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Password Confirm"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={passwordConfirm}
            onChangeText={(p) => setPasswordConfirm(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, passwordConfirm)}
            >
              REGISTER
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
