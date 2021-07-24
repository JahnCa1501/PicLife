import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";

function SigninForm({navigation}) {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  function handleVerify(input) {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "signin") {
      if (email && password && !emailError && !passwordError) {
        signin(email, password);
      }
    }
  }

  return (
    <View style={styles.container}>
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
      />
      {emailError && (
        <Caption style={styles.caption}>Please enter your email</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}
      />
      {passwordError && <Caption style={styles.caption}>Please enter your passwor</Caption>}
      <Button mode="contained" style={styles.button} onPress={() => handleVerify("signin")}>
        LOGIN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#227cb2"
  },

  caption: {
    color: "#FF0000",
    textAlign: "center",
  }
});

export default SigninForm;