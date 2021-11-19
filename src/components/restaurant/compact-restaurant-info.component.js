import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";
import { Favourite } from "../favourites/favourite.component";

const Item = styled.View`
  align-items: center;
  padding: 10px;
  max-width: 120px;
`;

export const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

export const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Favourite restaurant={restaurant} />
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption" center numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
