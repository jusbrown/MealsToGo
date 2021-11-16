import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Spinner = styled(ActivityIndicator)`
  margin-left: -25px;
`;
