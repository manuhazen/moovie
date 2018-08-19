import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Card, CardImg, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

const SingleActor = ({ actor }) => {

    const errorIMage = (e) => {
        e.target.src = '';
    };

    return (
        <Card className="actor__card">
            <CardImg width="100%" src={`https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`} 
                alt={actor.name} onError={errorIMage} className="actor__card-face"/>
            
            <CardBody>
                <CardTitle className="h6 actor__card-name">
                    <Link to={`/actors/${actor.id}`}>{actor.name}</Link> 
                </CardTitle>
            </CardBody>
        </Card>
    )
};

SingleActor.propTypes = {
    actor: PropTypes.shape({
        profile_path: PropTypes.string,
        name: PropTypes.string,
        character: PropTypes.string
    })
};

export default SingleActor;