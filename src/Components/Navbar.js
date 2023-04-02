import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import userContext from "../Context/users/userContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { inOrOut } = context;
  const navigation = useNavigation();
  return (
    <View style={styles.navbarStyle}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.itemStyle}>
          <Icon style={styles.iconStyle} name="home" />
          <Text style={styles.textStyle}>Home</Text>
        </View>
      </TouchableOpacity>
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="phone" />
            <Text style={styles.textStyle}>Travel</Text>
          </View>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <View
          style={{
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 100,
            padding: 5,
            paddingHorizontal: 7.5,
          }}
        >
          <Icon
            style={[styles.iconStyle, { alignSelf: "center" }]}
            name="plus"
          />
        </View>
      </TouchableOpacity>
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("YourTravel")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="heart" />
            <Text style={styles.textStyle}>Your</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {!inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="user" />
            <Text style={styles.textStyle}>Login</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="user" />
            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarStyle: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: "2.5%",
  },
  itemStyle: {
    display: "flex",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 10,
    color: "white",
  },
  iconStyle: {
    fontSize: 20,
    color: "white",
  },
});

export default Navbar;
