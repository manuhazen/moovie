import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { Card, CardImg, CardTitle, CardSubtitle, CardBody} from 'reactstrap';
import MoviesList from '../components/MoviesList';
import {
  getActorProfile,
  getActorMovies,
} from '../actions/actorActions';

export class ActorsPage extends Component {

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getActorProfile(id);
    this.props.getActorMovies(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getActor(this.props.match.params.id);
      this.props.getActorMovies(this.props.match.params.id);
    }
  }

  render() {
    const { actor, movies } = this.props;

    const errorImage = (e) => {
      e.target.src = ''
    };

    return (
      <div className="row">
        <div className="col-md-3">
          <Card className="actor__card">
            <CardImg top src={`https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`}
              alt={actor.name} onError={errorImage}></CardImg>
            <CardBody>
              <CardTitle className="h6 actor__card-name">
                <Link to={`/actors/${actor.id}`}> {actor.name} </Link>
              </CardTitle>
              <CardSubtitle className="h6 actor__card-info">
                <strong>Birthday: </strong> {actor.birthday}
              </CardSubtitle>
              <CardSubtitle className="h6 actor__card-info">
                <strong>From: </strong> {actor.place_of_birth}
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-9 actor__page-info">
          <h4 className="actor__page-info__title">Biography: </h4>
          <p className="actor__page-info__content">
            {actor.biography}
          </p>
        </div>

        <div className="col-md-12 movie__list">
          <h1 className="text-center h3 movie__list-title">Movies</h1>
          <MoviesList movies={movies} hideSummary={true} itemsPerRow={4} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.actorStore;
}

export default connect(mapStateToProps, { getActorProfile, getActorMovies})(ActorsPage);
