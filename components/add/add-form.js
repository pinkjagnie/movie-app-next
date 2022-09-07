import styles from "./add-form.module.css";

function AddForm() {
  return (
    <section className={styles.add}>
      <h1>Add a movie to our database</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="year">Year of production</label>
            <input type="text" id="year" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="time">Time (e.g. 2h 10min)</label>
            <input type="text" id="time" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="director">Director</label>
            <input type="text" id="director" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="writer">Writer</label>
            <input type="text" id="writer" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="production">Production (country name)</label>
            <input type="text" id="production" required />
          </div>
        </div>
        <div className={styles.actions}>
          <button>Send</button>
        </div>
      </form>
    </section>
  );
}

export default AddForm;