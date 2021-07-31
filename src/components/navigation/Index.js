import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/SignIn"
import Signup from "../screens/Signup"
import Home from "../screens/Home";
import Search from "../screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Navigation() {
  const { state, persistLogin } = useContext(AuthContext);

  useEffect(() => {
    persistLogin();
  }, []);

  SplashScreen.preventAutoHideAsync();

  if (!state.loading) SplashScreen.hideAsync();

  return (
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


         <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({size }) => (
          <MaterialCommunityIcons name="account-search" size={40} />
          ),
        }}
        />
            
            </Tab.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}


export default Navigation;