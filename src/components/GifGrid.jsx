import { GifGridItem } from "./GifGridItem";
import { useState, useEffect } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {


    //  const { images, isLoading } = useFetchGifs();
  const [images, setImages] = useState([])

  const getImages = async(category) => {
    const images = await getGifs(category);
    setImages(images);
  }


  useEffect(() => {
    getImages(category)
  }, [])

  

  return (
    <>
        <h3>{ category }</h3>
        <div className="card-grid">
          {images.map((image)=>(
            <GifGridItem 
            key={image.id}
            { ...image }
            />
            ))}
        </div>
    </>
  )
}



