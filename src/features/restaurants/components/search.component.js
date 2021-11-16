import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "../screens/restaurant.styles";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search, error } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log(`error: ${error}`);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
