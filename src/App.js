import logo from './logo.svg';
import './App.css';
//routing
import { Route, Switch } from "react-router-dom";
// component
import About from "./components/About";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import Users from "./components/Users";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Description from "./components/Description";




function App() {
  
     


     return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movies" component={MovieList} />
                <Route
                    exact
                    path="/description/:title"
                    component={Description}
                />
                <Route path="/users" component={Users} />
                <Route component={NoMatch} />
            </Switch>

     
    </div>
  );
}

export default App;
