import AllMovies from "../../components/movies/all-movies";

function AllMoviesPage(props) {
  return <AllMovies movies={props.movies} />;
}

export default AllMoviesPage;

export async function getServerSideProps(context) {

  let res = await fetch("http://localhost:3000/api/movies", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  let movies = await res.json();

  return {
    props: { 
      movies: movies.movies
    },
  };
}