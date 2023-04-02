import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <View style={styles.navbarStyle}>
        <Image style={styles.logoStyle} source={require("../logo1.jpeg")} />
        <View>
          <Text style={{ fontWeight: "bold", color: "#F2AA4CFF" }}>SaKha</Text>
          <Text style={{ fontWeight: "bold", color: "#555555" }}>
            Find Traveller
          </Text>
        </View>
        <View style={styles.innerContainerStyle}>
          <Icon size={20} name="search" color="white" />
          <TextInput
            style={{ color: "white" }}
            placeholder="Places"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity onPress={() => console.log("Filter")}>
          <Icon
            style={{ flex: 1, paddingVertical: 5 }}
            size={22.5}
            name="filter"
            color="white"
          />
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", paddingVertical: 5, columnGap: 10 }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 40,
    width: "12%",
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  navbarStyle: {
    display: "flex",
    flexDirection: "row",
    columnGap: 7.5,
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainerStyle: {
    flexDirection: "row",
    backgroundColor: "#333333",
    padding: 2.5,
    paddingHorizontal: 7.5,
    columnGap: 7.5,
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    marginBottom: 2.5,
  },
});

export default Header;
