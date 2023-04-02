import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import userContext from "../Context/users/userContext";

const myAlert = () => {
  const context = useContext(userContext);
  const { alertColour, alertMsg, alertShow, setAlertShow } = context;

  useEffect(() => {
    setTimeout(() => {
      setAlertShow(false);
    }, 2500);
  });

  return (
    <>
      {alertShow ? (
        <View
          style={{
            backgroundColor: alertColour,
            height: "7.5%",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{alertMsg}</Text>
        </View>
      ) : null}
    </>
  );
};

export default myAlert;
