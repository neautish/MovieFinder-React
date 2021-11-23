import React, { useState } from "react";

import Header from "./components/Header";
import Movies from "./components/Movies";
import './App.css';


function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [inputTerm, setInputTerm] = useState('')
  const moviesFromSearch = (searchedMoviesArr, inputTerm) => {
    setSearchedMovies(searchedMoviesArr);
    setInputTerm(inputTerm);
  }

  return (
    <React.Fragment>
      <Header onSearchMovies={moviesFromSearch} />
      <Movies searchedMovies={searchedMovies} inputTerm={inputTerm} />
    </React.Fragment>
  );
}

export default App;
