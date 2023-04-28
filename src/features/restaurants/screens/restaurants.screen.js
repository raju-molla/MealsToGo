import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 20px;
`;
const RestaurantContainer = styled(View)`
  padding: 10px;
  flex: 1;
  background-color: green;
`;

export const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantContainer>
          <RestaurantInfo />
        </RestaurantContainer>
      </SafeArea>
    </>
  );
};
