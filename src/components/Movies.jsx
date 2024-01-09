import React from "react";
import "../styles/Movies.css";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";

const Movies = ({
  input,
  setInput,
  movies,
  getMovies,
  getMovieDetails,
  mDetails,
}) => {
  return (
    <>
      <div className="movies">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-lg-5">
          <input
            type="text"
            className=" col-10 col-lg-6 mx-auto mx-lg-0  input rounded-2 px-3 px-lg-5 my-5"
            placeholder="Search movies and series ..."
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInput(e.target.value);
                getMovies();
                setInput("");
              }
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <span>
            <FaSearch
              fontSize={30}
              className="searchIcon mx-1"
              onClick={() => {
                getMovies();
                setInput("");
              }}
            />
          </span>
        </div>
        <div className="d-flex flex-wrap ">
          {movies == undefined ? (
            <h1 className="fs-5 col-12 text-center text-danger ">
              no result found.
            </h1>
          ) : (
            movies.map((data) => {
              return (
                <Card
                  data={data}
                  key={data.imdbID}
                  getMovieDetails={getMovieDetails}
                  mDetails={mDetails}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
