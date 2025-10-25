import React from "react";

const images = [
  {
    id: "img1",
    src: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "First Image",
  },
  {
    id: "img2",
    src: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600",
    alt: "Second Image",
  },
];

function Images() {
  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          id={image.id}
          src={image.src}
          alt={image.alt}
          style={{ width: "200px", height: "200px", objectFit: "cover", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default Images;
