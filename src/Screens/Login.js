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

const Login = ({ navigation }) => {
  const context = useContext(userContext);
  const { login } = context;
  const [phone, setPhone] = useState(7719468189);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState(false);
  return (
    <View style={styles.loginFormStyle}>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          width: 250,
          columnGap: 10,
        }}
      >
        <TouchableOpacity onPress={() => setEmailOrPhone(false)}>
          <Text style={{ color: "white" }}>Email</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>/</Text>
        <TouchableOpacity onPress={() => setEmailOrPhone(true)}>
          <Text style={{ color: "white" }}>Phone</Text>
        </TouchableOpacity>
      </View>
      {emailOrPhone ? (
        <TextInput
          placeholder="Enter Your Phone number"
          placeholderTextColor={"#444444"}
          style={styles.InputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setPhone(value)}
        />
      ) : (
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor={"#444444"}
          style={styles.InputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setEmail(value)}
        />
      )}
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
          if (phone == "" && emailOrPhone) {
            Alert.alert("Enter a valid phoneNo");
          }
          if (email == "" && !emailOrPhone) {
            Alert.alert("Enter a valid email");
          }
          if ((email != "" || phone != "") && password != "") {
            login(phone, email, password);
            navigation.navigate("Home");
          }
        }}
        style={{ alignSelf: "center" }}
      >
        <Text style={{ color: "#F2AA4CFF", fontWeight: "bold" }}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#555555" }}>
          -----------------------------------
          <Text style={{ color: "white" }}> OR </Text>
          -----------------------------------
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#F2AA4CFF", fontWeight: "bold" }}>
            Create Your Account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    borderBottomWidth: 1,
    alignSelf: "center",
    borderBottomColor: "white",
    height: 50,
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
});

export default Login;
