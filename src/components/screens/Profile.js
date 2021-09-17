import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import { Button } from  "react-native-paper";
import {Context as AuthContext} from "../../providers/AuthContext";
import { firebase } from "../../firebase/Index";

function profile ({navigation}) {
    const { signout } = useContext(AuthContext);

    const user = firebase.auth().currentUser;

    const [perfil, setPerfil] = useState([])
      useEffect(() => {
           firebase.firestore().collection("users").where("id", "==",user.uid)
      .get()
               .then((querySnapshot) => {
          const perfil = [];
          querySnapshot.forEach((doc) => {
                  const { fullname} = doc.data()
                  perfil.push(
                      {
                          id: doc.id,
                          fullname,
                      }
              )
              })
              setPerfil(perfil)
          });
        
      }, []);

    return (
      <ScrollView style={styles.container}>
            {perfil.map((usuario) => {
              return(
              <View key={usuario.id}>
                 <View style={styles.header}>
                   <Image style={styles.avatar} source={require('../images/UserPicture.png')}/>
                   <Text style={styles.user}>{usuario.fullname}</Text>
                   </View>
              </View>
              )
            })}
                <Button icon="logout" style={styles.buttonContainer}  onPress={signout} mode="contained">Signout</Button>      
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E7E7",
  },

  header:{
    backgroundColor: "#bcbcbc",
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 350
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
    marginTop: 110
  },

  user: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 250,
    fontWeight: "bold"
  },

  buttonContainer: {
    marginTop: 25,
    marginBottom: 25,
    borderRadius:30,
    backgroundColor: "#bcbcbc",
  },
});

export default profile;