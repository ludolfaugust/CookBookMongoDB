import "./App.css";
import "./resetter.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:5000/recipes";
  const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setRecipes(response.data.data);
    });
  });

  return (
    <div className="App">
      <div className="container">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/recipes">
              <Posts recipes={recipes} />
            </Route>
            <Route path="/recipes/:id">
              <Post recipes={recipes} />
            </Route>
            <Route>
              <Home recipes={recipes} />
            </Route>
          </Switch>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
