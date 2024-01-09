import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  useEffect(() => {
    favourites();
  }, []);
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [mDetails, setMdetails] = useState([]);
  const favourites = () => {
    fetch(`https://www.omdbapi.com/?apikey=ce1b258f&s=naruto`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };
  const getMovies = () => {
    fetch(`https://www.omdbapi.com/?apikey=ce1b258f&s=${input}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };
  const getMovieDetails = (name) => {
    fetch(`https://www.omdbapi.com/?apikey=ce1b258f&t=${name}`)
      .then((res) => res.json())
      .then((data) => setMdetails(data));
  };
  return (
    <>
      <Header />
      <Movies
        input={input}
        setInput={setInput}
        movies={movies}
        getMovies={getMovies}
        mDetails={mDetails}
        getMovieDetails={getMovieDetails}
      />
    </>
  );
}

export default App;
