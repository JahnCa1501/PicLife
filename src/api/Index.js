//API LINK

const api = "https://api.pexels.com/v1/curated";
const apiKey = "563492ad6f91700001000001bef0c946941147b298b3710bb8e84838";



export const curatedPicture = async () => {
   
    const response = await fetch(api, {
        headers: {
            'Authorization': apiKey
        }
    })

    const data = await response.json();

    console.log(data);

    return data;
}

const api2="https://api.pexels.com/v1/curated/?page=2&per_page=15"
export const searchscreen = async () => {
   
    const response = await fetch(api2, {
        headers: {
            'Authorization': apiKey
        }
    })

    const data = await response.json();

    console.log(data);

    return data;
}

const apisearch= "https://api.pexels.com/v1/"
export const searchresult = async (name) => {
    const endpoint= `${apisearch}search?query=${name}&per_page=5`
    const response = await fetch(endpoint, {
        headers: {
            'Authorization': apiKey
        }
    })

    const data = await response.json();

    console.log(data);

    return data;
}