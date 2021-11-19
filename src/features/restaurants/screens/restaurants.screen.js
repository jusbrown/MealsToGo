import React, { useContext, useState } from "react";
import { Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantList } from "./restaurant.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../components/favourites/favouries-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import {
  LoadingView,
  Spinner,
} from "../../../components/utility/loading.styles";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Spinner size={50} animating={true} color={Colors.blue300} />
        </LoadingView>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} navigation={navigation} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
};
