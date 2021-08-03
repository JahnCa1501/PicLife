import React, {useContext} from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import { Button } from  "react-native-paper";
import {Context as AuthContext} from "../../providers/AuthContext";

function profile ({navigation}) {
    const { signout } = useContext(AuthContext);

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <Text style={styles.text}>Name Here</Text>
                <Button icon="logout" style={styles.buttonContainer}  onPress={signout} mode="contained">Signout</Button>      
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E7E7",
  },

  header:{
    backgroundColor: "#000000",
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "#000000"
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop: 130
  },

  buttonContainer: {
    marginTop: 25,
    marginBottom: 25,
    borderRadius:30,
    backgroundColor: "#bcbcbc",
  },
});

export default profile;