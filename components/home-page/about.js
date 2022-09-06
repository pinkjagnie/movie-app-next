import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h1>Filmasi</h1>
      <h2>Movie details app</h2>
      <p>Welcome to the online database of information related to films.</p>
      <p>It is a place for movie lovers that you can contribute to. Add new movies to the database today!</p>
    </section>
  );
}

export default About;