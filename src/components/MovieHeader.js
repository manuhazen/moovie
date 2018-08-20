import React, { Component } from 'react';

import Rating from 'react-rating';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import ReactPlayer from 'react-player';

import Label from './Labels';
import ActorList from './ActorsList';

export class MovieHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }


    render() {

        const {movie, genres, trailer, actors} = this.props;
        
        const headerStyle = {
            backgroundImage: `black, url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`
        };
        
        const parseYear = (stringDate) => {
            const date = new Date(stringDate);
            return date.getFullYear();
        };

        const modal = (
            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} style={{maxWidth: '100%'}}>
                <ModalHeader toggle={this.toggle}> {trailer.name} </ModalHeader>
                <ModalBody>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer.key}`} playing height="90vh" width="100%" />
                </ModalBody>
            </Modal>
        );

        return (
            <div className="row">
                <div className="col-md-12 text-center movie-trailer" style={headerStyle} onClick={this.toggle}>
                    { trailer.key ? modal: null}
                </div>

                <div className="col-md-3">
                    <img alt='' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} className="img-responsive"/>
                </div>
            
                <div className="col-md-8">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="movie__title"> {movie.original_title}</h1>
                            <h4 className="movie__release">{parseYear(movie.release_date)}</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="movie__vote">
                                {movie.vote_avergate} { ' ' }
                                <Rating initialRating={movie.vote_average} emptySymbol="fa fa-start-o" fullSymbol="fa fa-start"
                                    stop={10} step={2} />
                                <Label labels={genres} />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="summary">Summary</h1>
                            <p> { movie.overview }</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h1>Top Billed Cast</h1>
                            <ActorList actors={actors} />
                        </div>
                    </div>
                </div>
            </div>
        )
}
}

export default MovieHeader
