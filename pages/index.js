import About from "../components/home-page/about";
import FeaturedMovies from "../components/home-page/featured-movies";

function HomePage(props) {
  return(
    <>
      <About />
      <FeaturedMovies movies={props.movies}/>
    </>
  )
}

export default HomePage;

export async function getServerSideProps(context) {

  let res = await fetch("http://localhost:3000/api/movies", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  let movies = await res.json();
  let moviesFeatured = await movies.movies.filter((movie) => movie.isFeatured);

  return {
    props: { 
      movies: moviesFeatured
    },
  };
}
