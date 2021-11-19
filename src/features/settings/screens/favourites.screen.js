import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/screens/restaurant.styles";
import { Text } from "../../../components/typography/text.component";

const SafeAreaContainer = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeAreaContainer>
      <Text center>No favourites yet</Text>
    </SafeAreaContainer>
  );
};
