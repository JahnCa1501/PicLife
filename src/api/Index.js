//API LINK

const api = "https://api.pexels.com/v1/";
const apiKey = "563492ad6f91700001000001bef0c946941147b298b3710bb8e84838";

const curatedPicture = async () => {
    const endpoint = `${api}curated`

    const response = await fetch(api, {
        headers: {
            'Authorization': apiKey
        }
    })

    const data = await response.json();

    console.log(data);
}

export default curatedPicture;