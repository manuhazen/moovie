import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pagination from 'react-js-pagination';

import {getMovies} from '../actions/moviesActions';

import MoviesList from '../components/MoviesList';


export class UpcomingPage extends Component {

  componentWillMount() {
    this.props.getMovies(1, 'upcoming');
  }

  handlePageChange(pageNumber) {
    this.props.getMovies(pageNumber, 'upcoming');
  }


  render() {
    return (
      <div>
        <h1 className="text-center page-title">Upcoming movies</h1>
        <div className="row">
          <div className="col-md-12">
            <MoviesList movies={this.props.movies} cols={6} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
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

export default connect(mapStateToProps, {getMovies})(UpcomingPage);
