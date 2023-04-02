import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import userContext from "../Context/users/userContext";

const SignUp = ({ navigation }) => {
  const context = useContext(userContext);
  const { signUp } = context;
  const [phone, setPhone] = useState(7719468189);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.loginFormStyle}>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor={"#444444"}
        style={styles.InputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Enter Your Phone number"
        placeholderTextColor={"#444444"}
        style={styles.InputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setPhone(value)}
      />
      <TextInput
        placeholder="Enter Your email id"
        placeholderTextColor={"#444444"}
        style={styles.InputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Enter Your Password"
        placeholderTextColor={"#444444"}
        style={styles.InputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity
        onPress={() => {
          if (phone == "") Alert.alert("Enter a valid phoneNo");
          if (email == "") Alert.alert("Enter a valid phoneNo");
          if (password == "") Alert.alert("Enter a valid phoneNo");
          if (phone == "") Alert.alert("Enter a valid phoneNo");
          if (email != "" && password != "" && name != "" && phone != "") {
            signUp(name, phone, email, password);
            navigation.navigate("Home");
          }
        }}
        style={styles.loginButtonStyle}
      >
        <Text style={{ color: "#F2AA4CFF", fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    borderBottomWidth: 1,
    alignSelf: "center",
    borderBottomColor: "white",
    height: 40,
    width: 250,
    padding: 10,
    color: "#FFF8C8",
  },
  loginFormStyle: {
    justifyContent: "center",
    gap: 25,
    flex: 1,
    backgroundColor: "#111111",
    width: "100%",
  },
  loginButtonStyle: {
    alignSelf: "center",
    margin: 25,
  },
});

export default SignUp;
