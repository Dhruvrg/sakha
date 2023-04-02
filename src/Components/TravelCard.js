import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import userContext from "../Context/users/userContext";
import { useNavigation } from "@react-navigation/native";

const TravelCard = ({ item }) => {
  const context = useContext(userContext);
  const { address } = context;
  const { source, destination, mode } = item;
  const navigation = useNavigation();
  const removeCharactersFromAString = (removalName, originalName) =>
    removalName.split("").reduce((obj, v) => obj.replace(v, ""), originalName);
  const sourceName = removeCharactersFromAString(address, source);
  const destinationName = removeCharactersFromAString(address, destination);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("FindingMap", { item });
      }}
    >
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>
          <Text style={{ textAlign: "center" }}>{sourceName}</Text>
        </View>
        <View style={styles.modeStyle}>
          <Text style={{ textAlign: "center" }}>{mode}</Text>
        </View>
        <View style={styles.contentStyle}>
          <Text style={{ textAlign: "center" }}>{destinationName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    width: "42.5%",
    height: 50,
    justifyContent: "center",
  },
  containerStyle: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 7.5,
    backgroundColor: "#F2AA4CFF",
    padding: 7.5,
  },
  modeStyle: {
    width: "15%",
    backgroundColor: "white",
    height: "50%",
    borderRadius: 15,
    alignSelf: "center",
  },
});

export default TravelCard;
