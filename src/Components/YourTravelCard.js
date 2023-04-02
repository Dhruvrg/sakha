import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import userContext from "../Context/users/userContext";

const YourTravelCard = ({ item }) => {
  const context = useContext(userContext);
  const { deleteTravel, address } = context;
  const { id, source, destination, mode } = item;
  const removeCharactersFromAString = (removalName, originalName) =>
    removalName.split("").reduce((obj, v) => obj.replace(v, ""), originalName);
  const sourceName = removeCharactersFromAString(address, source);
  const destinationName = removeCharactersFromAString(address, destination);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.contentStyle}>
        <Text style={{ textAlign: "center" }}>{sourceName}</Text>
      </View>
      <View style={styles.modeStyle}>
        <Text style={{ textAlign: "center" }}>{mode}</Text>
        <View style={styles.iconStyle}>
          <TouchableOpacity onPress={() => deleteTravel(id)}>
            <Icon style={{ color: "black" }} size={20} name="minus" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentStyle}>
        <Text style={{ textAlign: "center" }}>{destinationName}</Text>
      </View>
    </View>
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
  },
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default YourTravelCard;
