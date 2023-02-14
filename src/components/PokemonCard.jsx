import React from "react";

const PokemonCard = ({ name, image, type }) => {
  const backgroundColor = () => {
    switch (type) {
      case "fire":
        return "#FDDFDF";
      case "grass":
        return "#DEFDE0";
      case "water":
        return "#DEF3FD";
      case "electric":
        return "#FCF7DE";
      case "ice":
        return "#DEF3FD";
      case "fighting":
        return "#F5D0C1";
      case "ground":
        return "#f4e7da";
      default:
        return "#D3D3D3";
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor(), padding: "10px" }}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
};

export default PokemonCard;
