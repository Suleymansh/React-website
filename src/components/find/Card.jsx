import React from "react";
import styles from "./index.module.css";

const Card = ({ image, brand }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="/" />
      <p>{brand}</p>
    </div>
  );
};

export default Card;
