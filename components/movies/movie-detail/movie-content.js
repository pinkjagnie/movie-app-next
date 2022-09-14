import MovieHeader from "./movie-header";
import StarRating from "../../rating";

import styles from "./movie-content.module.css";

function MovieContent(props) {
  return (
    <article className={styles.content}>
      <MovieHeader movie={props.movie} />
      <StarRating movie={props.movie}/>
    </article>
  );
}

export default MovieContent;