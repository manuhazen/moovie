import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieHeader from '../components/MovieHeader';
import MoviesList from '../components/MoviesList';
import ActorList from '../components/ActorsList';
import ReviewList from '../components/ReviewsList';

import {
  getMovie,
  getMovieVideos,
  getMoviesReviews,
  getRelatedMovies,
  getMovieActors,
  cleanMovieState
} from '../actions/movieActions';

export class MoviePage extends Component {

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getMovie(id);
    this.props.getMovieVideos(id);
    this.props.getMoviesReviews(id);
    this.props.getRelatedMovies(id);
    this.props.getMovieActors(id);
  }

  componentWillUnmount() {
    this.props.cleanMovieState();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12"> 
          <MovieHeader movie={this.props.movie} trailer={this.props.trailer} genres={this.props.genres} 
            actors={this.props.actors} productionCompanies={this.props.productionCompanies}/>
        </div>
        <div className="col-md-12">
          <div>ReviewList</div>
          <div>MovieCardList</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.movieStore;
}

export default connect(mapStateToProps, {
  getMovie,
  getMovieVideos,
  getMoviesReviews,
  getRelatedMovies,
  getMovieActors,
  cleanMovieState
})(MoviePage);
