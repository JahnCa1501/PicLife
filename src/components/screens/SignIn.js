import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/SigninForm";


function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/PicLife.png')} />
      <SigninForm />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
      <Text style={styles.text}>¿Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.text}>
          ¿Don't have an account? <Text style={styles.text2}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#E7E7E7",
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },

  text2: {
    color: "#227cb2",
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});

export default Signin;