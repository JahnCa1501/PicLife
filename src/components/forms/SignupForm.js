import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext"

function SignupForm({navigation}) {
    const { state, signup } = useContext(AuthContext);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [error, setError] = useState(false);

    function validation(){
      if (password.length < 8){
        return(
          <Caption style={styles.requirements}>Password should have at least 8 characters</Caption>
        ) 
      } 
    }

    useEffect(() => {
        if (state.registered) navigation.navigate("Home");
      }, [state.registered]);

    function handleVerify(input){
        if (input === "fullname"){
            if (!fullname) setFullnameError(true);
            else setFullnameError(false);
        } else if (input ==="email"){
            if (!email) setEmailError(true);
            else setEmailError(false);
        } else if (input === "password"){
            if (!email) setPasswordError(true);
            else setPasswordError(false);
        } else if (input === "confirmPassword"){
            if (!email) setConfirmPasswordError(true);
            else setConfirmPasswordError(false);
        } else if (input === "signup") {
            if (
              fullname &&
              email &&
              password &&
              confirmPassword &&
              !fullnameError &&
              !emailError &&
              !passwordError &&
              !confirmPasswordError
            ) {
              try {
                signup(fullname, email, password);
              } catch (error) {
                console.log(error);
              }
            } else setError("All fields are required!");
          }
        }      
    

    return(
        <View>
          {error && <Text>{error}</Text>}
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
            <TextInput
             mode="outlined" 
             label="Fullname" 
             value={fullname} 
             onChangeText={setFullname}
             onBlur={() => handleVerify("fullname")}
            />
            {fullnameError && <Caption style={styles.caption}>Please enter your fullname</Caption>}

            <TextInput 
             mode="outlined" 
             label="Email" 
             value={email}
             onChangeText={setEmail}
             autoCapitalize= "none"
             onBlur={() => handleVerify("email")}
            />
            {emailError && <Caption style={styles.caption}>Please enter your email</Caption>}

            <TextInput
             mode="outlined" 
             label="Password" 
             value={password}
             onChangeText={setPassword}
             autoCapitalize= "none"
             secureTextEntry
             onBlur={() => handleVerify("password")}
            />
            {passwordError && <Caption style={styles.caption}>Please enter a password</Caption>}
            {validation()}
              
            <TextInput
             mode="outlined"
             label="Confirm Password" 
             value={confirmPassword} 
             onChangeText={setConfirmPassword}
             autoCapitalize= "none"
             secureTextEntry
             onBlur={() => handleVerify("confirmPassword")}
             />
             {confirmPasswordError && <Caption style={styles.caption}>Please confirm your password</Caption>}

            <Button style={styles.button} mode="contained" 
              onPress={() => handleVerify("signup")}>Create account</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: "#227cb2"
      },

      caption: {
        color: "#FF0000",
      },

      requirements: {
        textAlign: "center",
      }
});

export default SignupForm;