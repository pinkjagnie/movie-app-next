import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./rating.module.css";

const DUMMY_NOTE = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

let overallStar = (DUMMY_NOTE.reduce((a, b) => a + b, 0) / DUMMY_NOTE.length).toFixed(1);

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
  return (
    <div className={styles.rating}>
      <h1>Rating</h1>
      <div className={styles.ratingBox}>
        <div className={styles.yourRating}>
          <p>Your rating</p>
          {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
  
          return (
            <label key={i}>
              <input className={styles.radio} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
              <FontAwesomeIcon icon={faStar} className={styles.star} color={ratingValue <= (hover || rating) ? "#ffc107" : "#aaa"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
            </label>
          )
          })}
        </div>
        <div className={styles.overallRating}>
          <p>Overall rating</p>
          <div className={styles.overallStar}>
            <FontAwesomeIcon icon={faStar} className={styles.star} color={"#5a097a"} />
            <p>{overallStar}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StarRating;