import React, { Component } from 'react'
import {connect} from 'react-redux';

import Sidebar from '../components/Sidebar';

import {getGenres} from '../actions/moviesActions';


export class MovieCategories extends Component {

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <div>
        <Sidebar genres={this.props.genres} loading={this.props.loading} genreId={this.props.genreId} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {genres, genreId, loading} = state.moviesStore;
  return {genres, genreId, loading}
}

export default connect(mapStateToProps, {getGenres})(MovieCategories);
