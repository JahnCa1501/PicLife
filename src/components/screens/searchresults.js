import React, {useState, useEffect} from "react";
import {View, StyleSheet, ScrollView, Dimensions, Image} from "react-native";
import { Text, Button } from  "react-native-paper";
import { searchresult } from "../../api/Index";



const win = Dimensions.get('window');
const ratio = win.width/541;

function searchresults ({navigation, route}) {
  
    const {name} = route.params;
    const [result, setResult] = useState(null)

    const getResult = async () => {
      const data = await searchresult(name);

      setResult(data);
    }

    useEffect(() => {
        getResult();
    }, [name]);

    return( 
      <ScrollView style={styles.container}>
    
        {result &&
           result.photos.map((photo) => {
          return (
            <View key={photo.id}>
              <Text>{photo.photographer}</Text>
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
    
    
  image: {
    width: win.width,
    height: 500,
    alignSelf: "center",
    marginBottom: 50,
  },

  })
export default searchresults;