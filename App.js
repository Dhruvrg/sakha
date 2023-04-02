//cd Projects/ReactNative/sakha
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Navbar from "./src/Components/Navbar";
import Profile from "./src/Screens/Profile";
import Header from "./src/Components/Header";
import MyAlert from "./src/Components/MyAlert";
import UserState from "./src/Context/users/UserState";
import YourTravel from "./src/Screens/YourTravel";
import Contact from "./src/Screens/Contact";
import Create from "./src/Screens/Create";
import FindingMap from "./src/Screens/FindingMap";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UserState>
      <NavigationContainer>
        <Header />
        <MyAlert />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="YourTravel"
            component={YourTravel}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Create"
            component={Create}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Contact"
            component={Contact}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="FindingMap"
            component={FindingMap}
          />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </UserState>
  );
}
