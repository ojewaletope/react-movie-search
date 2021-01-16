import React, {Component} from 'react'
import './App.css';
import MovieSearch from "./components/movieSearch";

class App extends Component{
  render() {
    return (
        <div className="container">
          <h1 className="title"> Movie Search App</h1>
          <MovieSearch/>
        </div>
    );
  }

}

export default App;
