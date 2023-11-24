import axios from "axios";


//!API ye verdiğimiz endpoint için istek atıp verileri geri döndüren function.

const options = {

    params: {
        geo:'TR',
        lang:'tr'
    },

//?İSTEK GÖNDERİRKEN BELİRTMEMİZ GEREKEN KİMLİĞİMİZ
headers: {
        'X-RapidAPI-Key': '3e56dc0d92mshe72babef2d7cee7p1c9cccjsn1be6ecd3c1a5',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
    };

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com'

export const GetData = async (path) => {
try {
    return await axios.get(path, options);
}
catch (error) {
console.log("verileri çekemedik")    
}
}