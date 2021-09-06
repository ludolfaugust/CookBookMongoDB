import "./App.css";
import "./resetter.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false)

  useEffect(() => {
    
      .getEntries()
      .then((response) => {
        console.log(response.items);
        console.log(response.items[0].fields.name);
        setRecipes(response.items);
      })
      .catch(console.log("Something went wrong"));
  }, []);

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
