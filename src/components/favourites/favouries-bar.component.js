import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, navigation }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <TouchableOpacity
              key={restaurant.name}
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant })
              }
            >
              <Spacer position="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
