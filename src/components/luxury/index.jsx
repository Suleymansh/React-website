import React from "react";
import styles from "./index.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2> Luxury Selection</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="err"
          />
          <div className={styles.content}>
            <h3> Rolls Royce</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="err"
          />
          <div className={styles.content}>
            <h3> Rolls Royce</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="err"
          />
          <div className={styles.content}>
            <h3> Rolls Royce</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="err"
          />
          <div className={styles.content}>
            <h3> Rolls Royce</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
