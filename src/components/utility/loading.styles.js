import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

export const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
`;

export const Spinner = styled(ActivityIndicator)`
  margin-left: -25px;
`;
