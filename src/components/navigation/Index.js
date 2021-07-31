import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/SignIn"
import Signup from "../screens/Signup"
import Home from "../screens/Home";
import forgotPass from "../screens/ForgotPassword";

const Stack = createStackNavigator();

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
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
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
  );
}


export default Navigation;