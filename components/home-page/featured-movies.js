import styles from "./featured-movies.module.css";

function FeaturedMovies(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Movies</h2>
      <p>Here some movies</p>
    </section>
  );
}

export default FeaturedMovies;