import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-paper";
import SignupForm from "../forms/SignupForm";

function Signup({navigation}) {
    return(
        <View style={styles.container}>
             <Image style={styles.image} source={require('../images/PicLife.png')} />
            <SignupForm/>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.text}>
                    ¿Already have an account? <Text style={styles.text2}>Sign in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
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
      },

      text2: {
        color: "#227cb2",
      },

      image: {
        flex: 3,
        width: null,
        height: null,
        resizeMode: 'contain'
      },
});

export default Signup;