import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";

function forgotPassword({navigation}){
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>¿Forgot your Password?</Text>
            <Text>Please enter your email</Text>
            <TextInput
              mode="outlined" 
              label="Email" 
              value={email}
              onChangeText={setEmail}
              autoCapitalize= "none"
             />
             {emailError && <Caption style={styles.caption}>Please enter your email</Caption>} 

             <Button mode="contained" style={styles.button} onPress={() => handleVerify("")}>
                 Reset Password
             </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

      header: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
          paddingBottom: 15,
      },

      button: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: "#227cb2"
      },
});

export default forgotPassword;