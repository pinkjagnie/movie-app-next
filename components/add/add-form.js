import { useRef } from "react";

import styles from "./add-form.module.css";

function AddForm() {
  const titleRef = useRef();
  const yearRef = useRef();
  const imageRef = useRef();
  const timeRef = useRef();
  const directorRef = useRef();
  const writerRef = useRef();
  const productionRef = useRef();

  const addMovieHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredYear = yearRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredTime = timeRef.current.value;
    const enteredDirector = directorRef.current.value;
    const enteredWriter = writerRef.current.value;
    const enteredProduction = productionRef.current.value;

    console.log(enteredTitle, enteredYear, enteredImage, enteredTime, enteredDirector, enteredWriter, enteredProduction)

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        title: enteredTitle, 
        year: enteredYear, 
        image: enteredImage, 
        time: enteredTime, 
        director: enteredDirector, 
        writer: enteredWriter, 
        production: enteredProduction
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={styles.add}>
      <h1>Add a movie to our database</h1>
      <form className={styles.form} onSubmit={addMovieHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required ref={titleRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="year">Year of production</label>
            <input type="text" id="year" required ref={yearRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="image">Poster (url)</label>
            <input type="url" id="image" required ref={imageRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="time">Time (e.g. 2h 10min)</label>
            <input type="text" id="time" required ref={timeRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="director">Director</label>
            <input type="text" id="director" required ref={directorRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="writer">Writer</label>
            <input type="text" id="writer" required ref={writerRef}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="production">Production (country name)</label>
            <input type="text" id="production" required ref={productionRef}/>
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