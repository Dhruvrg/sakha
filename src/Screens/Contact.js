import { View, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import userContext from "../Context/users/userContext";
import TravelCard from "../Components/TravelCard";

const Contact = () => {
  const context = useContext(userContext);
  const { getTravel, allTravel } = context;

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <FlatList
        keyExtractor={(key) => {
          return key.id;
        }}
        data={allTravel}
        renderItem={({ item }) => {
          return <TravelCard item={item} />;
        }}
      />
    </View>
  );
};

export default Contact;
