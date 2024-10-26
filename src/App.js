import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard"; // Importerer MovieCard komponenten
import SearchIcon from "./search.svg"; // Importerer søgeikon
import "./App.css";

// API URL til at hente film fra OMDB
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // UseEffect hook køres, når hjemmesiden loader
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  // Funktion til at søge efter film
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    if (data.Search) {
      const sortedMovies = data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)); // Sorterer filmene efter udgivelsesår
      setMovies(sortedMovies);
    }
  };  

  // Selve hjemmesiden
  return (
    <div className="app">
      <h1>Filmdatabasen</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Søg efter en specifik film"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;