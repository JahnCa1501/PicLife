import React, { useState,useEffect } from "react";
import { View, StyleSheet,ScrollView ,Image, Dimensions, Linking, Button } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { curatedPicture }from "../../api/Index";

const win = Dimensions.get('window');
const ratio = win.width/541;

function Home({navigation}){

  const [curated, setCurated] = useState(null);

  const getCurated = async () => {
    const response = await curatedPicture();

    setCurated(response);
  };

  useEffect(() => {
    getCurated();
  }, []);

  return( 
    <ScrollView style={styles.container}>
      {curated &&
         curated.photos.map((photo) => {
        return (
          <View key={photo.id} style={styles.view}>
            <Button style={styles.text}
             onPress={() => Linking.openURL(photo.photographer_url)} title={photo.photographer}
             />
                <Image style={styles.image} source={{uri: photo.src.original}}/>
                <IconButton style={styles.button} icon="heart" size={30} 
                  color={Colors.red500}  onPress={() => {}}/>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    padding:10,
  },

  image: {
    width: win.width,
    height: 500,
    alignSelf: "center",
  },

  header:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:15,
    textAlign: "center"
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  view: {
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
    width: win.width,
    alignSelf: "center",
  }, 

  button: {
    marginTop: 2,
    marginBottom: 2,
  }
})

export default Home;