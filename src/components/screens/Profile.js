import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import { Text, Button } from  "react-native-paper";
import {Context as AuthContext} from "../../providers/AuthContext";


function profile ({navigation}) {
    const { signout } = useContext(AuthContext);
    return (
        <View style = {styles.container}>
            <Text>Welcome from home screen</Text>
            <Button onPress={signout}>Signout</Button>
            <Text> Hola </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      padding:10,
    },
    
  })
export default profile;