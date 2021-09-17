import AsyncStorage from "@react-native-async-storage/async-storage";

let listOfImage;

export const handleFavorite = async (name) =>{
    const response = await AsyncStorage.getItem("favoritesImages");
    listOfImage = await JSON.parse(response) || [];
   
        if (listOfImage.includes(name.name)) {
            for (let i = 0; i < listOfImage.length; i++) {
                
                if(listOfImage[i] === name.name){
                    listOfImage.splice(i, 1);
                }

            }
            alert(`${name.name} has been deleted from favorites`);
        }else if (listOfImage.includes(Boolean)) {
            for (let i = 0; i < listOfImage.length; i++) {
                
                if(listOfImage[i] === Boolean){
                    listOfImage.splice(i, 1);
                }

            }
        }else{
            listOfImage = [...listOfImage, name.name];
            alert(`${name.name} has been added to favorites`)
        }
      
     await AsyncStorage.setItem(
      "favoritesImages",
      JSON.stringify(listOfImage.filter(Boolean))
     );
     
     console.log(listOfImage.filter(Boolean));
       
};

export const clearFavorites = async ()  =>{
  try {
      await AsyncStorage.clear();
      console.log(listOfImage);
  } catch (error) {
      console.log(error)
  } 
}