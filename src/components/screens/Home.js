import React, { useState,useEffect } from "react";
import { View,StyleSheet,ScrollView ,Image} from "react-native";
import { Button, Text,Searchbar } from "react-native-paper"
import curatedPicture from "../../api/Index";

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
      <Text style={styles.header}>Home</Text>
      {curated &&
      curated.photos.map((photo) => {
        return (
          <View key={photo.id}>
            <Text>{photo.photographer}</Text>
             <Image style={styles.image} source={photo.src.medium}/>
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
    width: "contain",
    height: 400,
    marginBottom:50,
  
  },


  header:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:15,
  }
})

export default Home;