import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/SignIn"
import Signup from "../screens/Signup"
import Home from "../screens/Home"
import forgotPass from "../screens/ForgotPassword";
import Search from "../screens/Search"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import profile from "../screens/Profile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import searchresults from "../screens/searchresults";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Navigation() {
 
  const { state, persistLogin } = useContext(AuthContext);

  useEffect(() => {
    persistLogin();
  }, []);

  SplashScreen.preventAutoHideAsync();

  if (!state.loading) SplashScreen.hideAsync();

  function SearchStack({navigation}) {
    return (
      <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>  
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="searchresults" component={searchresults} options={{title: "Search Results"}}/>
      </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <NavigationContainer>
          {!state.loading && (
            <>
             {state.loggedIn ? (
                    <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({size }) => (
                        <MaterialCommunityIcons name="home" size={40} />
                         ),
                       }}
                     />
                   
                     <Tab.Screen name="Search" component={SearchStack} options={{
                         tabBarLabel: 'Search',
                         tabBarIcon: ({size}) => (
                         <FontAwesome name="search" size={30} />
                         ),
                       }}
                     />
              
                     <Tab.Screen name="Profile" component={profile} options={{
                         tabBarLabel: 'Profile',
                         tabBarIcon: ({size}) => (
                         <FontAwesome name="user" size={30} />
                         ),
                       }}
                     />

                  </Tab.Navigator>
          ) : (

            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="ForgotPassword" component={forgotPass} />
            </Stack.Navigator>
          )}
        </>
      )}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default Navigation;