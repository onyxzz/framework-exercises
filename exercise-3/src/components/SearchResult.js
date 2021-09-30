import React from "react";
import styles from "./SearchResult.module.css";

export default function SearchResult(props) {
  return (
    <div className={styles.product}>
      <div>
        <div>
          <img height="350" width="250" src={`/images/${props.image}`} />
        </div>
        <div className={styles.name}>{props.name}</div>
        <div>{props.manufacturer}</div>
        <div className={styles.price}>${props.price}</div>
        <div>{props.rating}★★★★</div>
        <div>{props.promos}</div>
      </div>
    </div>
  );
}
