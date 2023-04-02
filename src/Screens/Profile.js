import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import userContext from "../Context/users/userContext";

const Profile = ({ navigation }) => {
  const context = useContext(userContext);
  const { setInOrOut, info } = context;

  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <View style={{ padding: 25, borderBottomWidth: 1, borderColor: "grey" }}>
        <Text style={styles.infoStyle}>
          Name : <Text style={{ color: "#F2AA4CFF" }}>{info.name}</Text>
        </Text>
        <Text style={styles.infoStyle}>
          Phone no. : <Text style={{ color: "#F2AA4CFF" }}>{info.phone}</Text>
        </Text>
        <Text style={styles.infoStyle}>
          Email Id : <Text style={{ color: "#F2AA4CFF" }}>{info.email}</Text>
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setInOrOut(false);
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{ color: "#F2AA4CFF", fontWeight: "bold", fontSize: 20 }}
          >
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17.5,
  },
});

export default Profile;
