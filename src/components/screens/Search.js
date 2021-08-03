import React, { useContext,useState,useEffect } from "react";
import {View, StyleSheet, ScrollView, Image, Dimensions, Button, Linking} from "react-native";
import { Text, Searchbar} from "react-native-paper";
import {searchscreen} from "../../api/Index";

const win = Dimensions.get('window');
const ratio = win.width/541;

function Search({navigation}){
  const [picture, setPicture] = useState(null);
  const [name, setSearch] = useState("");


  const getPicture = async () => {
    const response = await searchscreen();

    setPicture(response);
  };

  useEffect(() => {
    getPicture();
  }, []);

  return( 
    <ScrollView style={styles.container}>
      <Searchbar style={styles.searchbar} placeholder="Search ..." value={name} onChangeText={setSearch} 
          onIconPress={() => navigation.navigate("searchresults", {name})}/>
      {picture &&
         picture.photos.map((photo) => {
        return (
          <View key={photo.id} style={styles.view}>
            <Button style={styles.text}
             onPress={() => Linking.openURL(photo.photographer_url)} title={photo.photographer}/>
             <Image style={styles.image} source={{uri: photo.src.original}}/>
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
  
  searchbar: {
    marginBottom: 25,
  },

  image: {
    width: win.width,
    height: 500,
    alignSelf: "center",
    marginBottom: 50,
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
    marginBottom: 10
  },

  view: {
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
    width: win.width,
    alignSelf: "center",
  }
})
export default Search;