import MoviesGrid from "./movies-grid";

import styles from "./all-movies.module.css";

function AllMovies(props) {
  return (
    <section className={styles.movies}>
      <h1>All Movies</h1>
      <MoviesGrid movies={props.movies} />
    </section>
  );
}

export default AllMovies;