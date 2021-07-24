import React, { useContext } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";

function Home({navigation}){
    const { signout } = useContext(AuthContext);

    return(
    <View>
      <Text>Welcome from home screen</Text>
      <Button onPress={signout}>Signout</Button>
    </View>
    )
}

export default Home;