import React from "react";
import styled from "styled-components/native";
import { Text, Image, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.success};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photo = [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    ],
    address = "100 some random street",
    isOnenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5} style={styles.card}>
        <RestaurantCardCover
          key={name}
          style={styles.cover}
          source={{ uri: photo[0] }}
        />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
