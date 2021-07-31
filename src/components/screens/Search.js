import React, { useContext } from "react";
import {View, StyleSheet} from "react-native";
import { Button, Text, Searchbar} from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";


function Search({navigation}){
  const { signout } = useContext(AuthContext);

  return(
    <View style={styles.container}>
       <Searchbar placeholder="Buscar  ..." />
      <Text>Welcome from home screen</Text>
      <Button onPress={signout}>Signout</Button>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      marginTop: 20,
      padding:10,
    }
  }
)

export default Search;