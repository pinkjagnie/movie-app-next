import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./rating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
  return (
    <div>
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
  )
};

export default StarRating;