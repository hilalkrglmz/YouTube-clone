import { createContext, useEffect, useState } from "react";
import { categories } from "../constant";
import { GetData } from "../helpers/GetData";

export const YoutubeContext = createContext();

export function YoutubeProvider ({children}) {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const [videos, setVideos] =useState (null);

    useEffect(() => {
       if(selectedCategory.type === 'home'
            ||
          selectedCategory.type === 'trending'
            ){

        //*Yardımcı function ı kullanarak api isteği atma
        GetData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))
       }
       if(selectedCategory.type === 'category'){
        GetData(`/search?query=${selectedCategory.name}&type=video`)
        .then((res) => setVideos(res.data.data))
       }
    },[selectedCategory])


    return(
        <YoutubeContext.Provider value={{selectedCategory, setSelectedCategory , videos}}>
            {children}
        </YoutubeContext.Provider>
    )
}
