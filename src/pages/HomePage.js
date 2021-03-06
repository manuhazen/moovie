import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pagination from 'react-js-pagination';

import {getMovies} from '../actions/moviesActions';

import MoviesList from '../components/MoviesList';

export class HomePage extends Component {

  componentWillMount() {
    this.props.getMovies();
  }

  handlePageChange(pageNumber) {
    window.scrollTo(0, 0);
    this.props.getMovies(pageNumber);
  }

  render() {
    return (
      <div>
        <h1 className="text-center page-title">Popular Movies</h1>
        <div className="row">
          <div className="col-md-12">
            <MoviesList movies={this.props.movies} cols={6} />
          </div>

          {
            (this.props.movies && this.props.movies.length ) ?
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
            </div> : null 
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {movies, loading, page, totalResults} = state.moviesStore;
  return {movies,loading, page, totalResults}
}

export default connect(mapStateToProps, {getMovies})(HomePage);
