import * as Animatable from "react-native-animatable";
import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import userContext from "../Context/users/userContext";

const FindingMap = ({ route }) => {
  const context = useContext(userContext);
  const { otherUserDetail, otherUser } = context;

  const sourceCoorde = { latitude: 19.306511, longitude: 72.84581 };
  const destinationCoorde = { latitude: 19.28043, longitude: 72.8479 };
  const { item } = route.params;
  const { id, source, destination, mode } = item;
  const [change, setChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setChange(false);
      otherUserDetail(id);
    }, 5000);
  }, []);
  return (
    <>
      {change ? (
        <View style={styles.containerStyle}>
          <Animatable.Image
            source={require("../map.gif")}
            animation="bounceIn"
            iterationCount={1}
            style={{ width: "100%" }}
          />
          <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            style={styles.textStyle}
          >
            Finding the Location
          </Animatable.Text>
        </View>
      ) : (
        <View style={{ flex: 1, backgroundColor: "#111111" }}>
          <View style={{ padding: 12.5 }}>
            <Text style={styles.infoStyle}>
              Name :{" "}
              <Text style={{ color: "#F2AA4CFF" }}>{otherUser.name}</Text>
            </Text>
            <Text style={styles.infoStyle}>
              Phone no. :
              <Text style={{ color: "#F2AA4CFF" }}>{otherUser.phone}</Text>
            </Text>
            <Text style={styles.infoStyle}>
              Email Id :{" "}
              <Text style={{ color: "#F2AA4CFF" }}>{otherUser.email}</Text>
            </Text>
            <Text style={styles.infoStyle}>
              From : <Text style={{ color: "#F2AA4CFF" }}>{source}</Text>
            </Text>
            <Text style={styles.infoStyle}>
              To : <Text style={{ color: "#F2AA4CFF" }}>{destination}</Text>
            </Text>
            <Text style={styles.infoStyle}>
              Mode : <Text style={{ color: "#F2AA4CFF" }}>{mode}</Text>
            </Text>
          </View>
          <MapView
            initialRegion={{
              latitude: 19.306511,
              longitude: 72.84581,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={{ flex: 1 }}
            mapType="mutedStandard"
          >
            <Marker
              coordinate={sourceCoorde}
              title={source}
              identifier="origin"
              pinColor="#000000"
            />
            <Marker
              coordinate={destinationCoorde}
              title={destination}
              identifier="origin"
              pinColor="#F2AA4CFF"
            />
          </MapView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#111111",
  },
  textStyle: {
    bottom: "25%",
    position: "absolute",
    color: "white",
    fontWeight: "bold",
  },
  infoStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default FindingMap;
