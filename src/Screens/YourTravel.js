import { View, FlatList } from "react-native";
import React, { useContext } from "react";
import userContext from "../Context/users/userContext";
import YourTravelCard from "../Components/YourTravelCard";

const YourTravel = () => {
  const context = useContext(userContext);
  const { yourTravel } = context;
  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <FlatList
        keyExtractor={(key) => {
          return key.id;
        }}
        data={yourTravel}
        renderItem={({ item }) => {
          return <YourTravelCard item={item} />;
        }}
      />
    </View>
  );
};

export default YourTravel;
