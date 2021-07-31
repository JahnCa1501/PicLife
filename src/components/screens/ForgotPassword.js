import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";

function forgotPass({ navigation }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/PicLife.png')} />
            <ForgotPasswordForm />
               <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                  <Text style={styles.text}>Return</Text>
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
        marginBottom: 5,
        marginTop: 5,
      },

      image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
      },
})

export default forgotPass;