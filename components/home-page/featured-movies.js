import MoviesGrid from "../movies/movies-grid";

import styles from "./featured-movies.module.css";

function FeaturedMovies(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Movies</h2>
      <MoviesGrid movies={props.movies}/>
    </section>
  );
}

export default FeaturedMovies;