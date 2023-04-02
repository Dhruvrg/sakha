import React, { useContext, useState } from "react";
import userContext from "../Context/users/userContext";
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = () => {
  const context = useContext(userContext);
  const { data, Mode, modeType, setModeType, setAddress } = context;
  const [cIdx, setCIdx] = useState(0);
  const [sIdx, setSIdx] = useState(0);
  return (
    <ScrollView style={{ backgroundColor: "#111111" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headerStyle}>Country</Text>
        <FlatList
          keyExtractor={(key) => {
            return key.id;
          }}
          horizontal
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setCIdx(item.id - 1)}
                style={{ position: "relative", marginRight: 5 }}
              >
                <Image
                  style={{ height: 135, width: 135, borderRadius: 5 }}
                  source={{ uri: item.imgUrl }}
                />
                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headerStyle}>State</Text>
        <FlatList
          keyExtractor={(key) => {
            return key.id;
          }}
          horizontal
          data={data[cIdx].state}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setSIdx(item.id - 1)}
                style={{ position: "relative", marginRight: 5 }}
              >
                <Image
                  style={{ height: 135, width: 135, borderRadius: 5 }}
                  source={{ uri: item.imgUrl }}
                />
                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headerStyle}>District</Text>
        <FlatList
          keyExtractor={(key) => {
            return key.id;
          }}
          horizontal
          data={data[cIdx].state[sIdx].district}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setAddress(item.address)}
                style={{ position: "relative", marginRight: 5 }}
              >
                <Image
                  style={{ height: 135, width: 135, borderRadius: 5 }}
                  source={{ uri: item.imgUrl }}
                />
                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.headerStyle}>Mode</Text>
        <FlatList
          keyExtractor={(key) => {
            return key.id;
          }}
          horizontal
          data={Mode}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setModeType(item.title)}
                style={{ position: "relative", marginRight: 5 }}
              >
                <Image
                  style={{ height: 135, width: 135, borderRadius: 5 }}
                  source={{ uri: item.imgUrl }}
                />
                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17.5,
    paddingVertical: 5,
  },
  titleStyle: {
    position: "absolute",
    bottom: 1.5,
    left: 2.5,
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
