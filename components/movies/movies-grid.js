import MovieItem from "./movie-item";

import styles from "./movies-grid.module.css";

function MoviesGrid(props) {
  console.log("PROPS === "+ props)
  const { movies } = props;

  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <MovieItem key={movie.slug} movie={movie}/>
      ))}
    </ul>
  );
}

export default MoviesGrid;