import React, { useContext } from "react";
import { Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  RestaurantList,
  SearchContainer,
  LoadingView,
  Spinner,
} from "./restaurant.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";
import { useEffect } from "react/cjs/react.development";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(`error: ${error}`);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Spinner size={50} animating={true} color={Colors.blue300} />
        </LoadingView>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
