import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import Upcoming from './pages/UpcomingPage';
import Genres from './pages/GenresPage';
import Movie from './pages/MoviePage';
import Actor from './pages/ActorsPage';

// Blocks
import MoviesCategories from './partials/MoviesCategories';
import Header from './partials/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-lg-2 col-md-2 sidebar-offcanvas" id="sidebar">
              <MoviesCategories />
            </div>
            <div className="col-12 col-md-10 col-lg-10">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/upcoming" component={Upcoming} />
                <Route exact path="/genres/:id/:genre" component={Genres} />
                <Route exact path="/movies/:id" component={Movie} />
                <Route exact path="/actors/:id" component={Actor} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
