import React, { useState, useContext, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { MapCallout } from "../components/map-callout.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <SafeArea>
        <Map
          region={{
            latitude: 0,
            longitude: 0,
          }}
        />
      </SafeArea>
    );
  }
  return <RestaurantMap navigation={navigation} />;
};

export const RestaurantMap = ({ navigation }) => {
  const [region, setRegion] = useState();
  const [latDelta, setLatDelta] = useState(0);

  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);

    setRegion({
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: latDelta,
      longitudeDelta: 0.05,
    });
  }, [location, viewport, latDelta]);

  return (
    <>
      <Search />
      <Map region={region}>
        {restaurants &&
          restaurants.map((restaurant) => (
            <Marker
              key={restaurant.placeId}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          ))}
      </Map>
    </>
  );
};
