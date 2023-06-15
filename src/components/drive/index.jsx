import React from "react";
import styles from "./index.module.css";
import drive from "../../assets/img/drive.png";

const Drive = () => {
  return (
    <div className={styles.drive}>
      <div className={styles.left}>
        <img src={drive} alt="drive" />
      </div>

      <div className={styles.content}>
        <h2>
          Lorem, ipsum dolor <span> Lorem, ipsum dolor</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quidem autem ullam ratione illo placeat soluta accusantium ex
          laudantium! Nemo consectetur nihil ex beatae aspernatur labore eos
          expedita tempore in!
        </p>
        <button> Browser cars</button>
      </div>
    </div>
  );
};

export default Drive;
