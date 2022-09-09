import MovieHeader from "./movie-header";

import styles from "./movie-content.module.css";

function MovieContent(props) {
  return (
    <article className={styles.content}>
      <MovieHeader movie={props.movie} />
      CONTENT
    </article>
  );
}

export default MovieContent;