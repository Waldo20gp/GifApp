import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])

    const getImages = async(category) => {
    const images = await getGifs(category);
    setImages(images);
    }


  useEffect(() => {
    getImages(category)
  }, [])



    return {
        images : [],
        isLoading : true,
    }
}
