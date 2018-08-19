import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pagination from 'react-js-pagination';

import {getMoviesByGenre} from '../actions/moviesActions';

import MoviesList from '../components/MoviesList';

export class GenresPage extends Component {

  componentWillMount() {
    this.props.getMoviesByGenre(1, this.props.match.params.id);
    console.log('loaded')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getMoviesByGenre(1, this.props.match.params.id);
    } 
  }

  handlePageChange(pageNumber) {
    this.props.getMoviesByGenre(pageNumber, this.props.match.params.id);
  }


  render() {
    return (
      <div>
        <h1 className="text-center page-title">{ this.props.match.params.genre}</h1>
        <div className="row">
          <div className="col-md-12">
            <MoviesList movies={this.props.movies} cols={6} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
          <Pagination
              activePage={this.props.page}
              itemsCountPerPage={20}
              totalItemsCount={this.props.totalResults}
              pageRangeDisplayed={5}
              innerClass="pagination"
              itemClass="page-item"
              linkClass="page-link"
              disabledClass="disabled"
              activeClass="active"
              onChange={this.handlePageChange.bind(this)}
          />
          </div>
        </div>
      </div>
    )
  }


}

function mapStateToProps(state) {
  const {movies, loading, page, totalResults} = state.moviesStore;
  return {movies, loading, page, totalResults}
}

export default connect(mapStateToProps, {getMoviesByGenre})(GenresPage);
