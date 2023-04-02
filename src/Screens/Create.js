import React, { useContext, useState } from "react";
import userContext from "../Context/users/userContext";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

const Create = ({ navigation }) => {
  const context = useContext(userContext);
  const { addTravel, id, address, inOrOut } = context;
  const [mode, setMode] = useState(7719468189);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [userId, setUserId] = useState(id);
  return (
    <>
      {inOrOut ? (
        <View style={styles.createStyle}>
          <TextInput
            placeholder="Enter Your Source"
            placeholderTextColor={"#444444"}
            style={styles.InputStyle}
            onChangeText={(value) => setSource(address + value)}
          />
          <TextInput
            placeholder="Enter Your Destination"
            placeholderTextColor={"#444444"}
            style={styles.InputStyle}
            onChangeText={(value) => setDestination(address + value)}
          />
          <TextInput
            placeholder="Enter Your Mode"
            placeholderTextColor={"#444444"}
            style={styles.InputStyle}
            onChangeText={(value) => setMode(value)}
          />
          <TouchableOpacity
            onPress={() => {
              if (mode == "") Alert.alert("Enter a valid phoneNo");
              if (source == "") Alert.alert("Enter a valid phoneNo");
              if (destination == "") Alert.alert("Enter a valid phoneNo");
              if (source != "" && destination != "" && mode != "") {
                addTravel(mode, source, destination, userId);
                navigation.navigate("YourTravel");
              }
            }}
            style={styles.buttonStyle}
          >
            <Text style={{ color: "#F2AA4CFF", fontWeight: "bold" }}>
              SUMBIT
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#111111",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>You Need to Login First</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    borderBottomWidth: 1,
    alignSelf: "center",
    borderBottomColor: "white",
    height: 45,
    width: 250,
    padding: 10,
    color: "#FFF8C8",
  },
  createStyle: {
    justifyContent: "center",
    gap: 25,
    flex: 1,
    backgroundColor: "#111111",
    width: "100%",
  },
  buttonStyle: {
    alignSelf: "center",
    margin: 25,
  },
});

export default Create;
