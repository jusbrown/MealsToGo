import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (searchBy) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(searchBy)
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
          console.log(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const searchBy = `${location.lat},${location.lng}`;
      retrieveRestaurants(searchBy);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        getRestaurants: retrieveRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
