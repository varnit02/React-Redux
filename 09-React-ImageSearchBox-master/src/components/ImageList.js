import React from "react";
// import "./imageList.css";
import ImageCard from "./ImageCard";
//assign key to root element
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  // console.log(props);
  return <div className="image-List">{images}</div>;
};

export default ImageList;
