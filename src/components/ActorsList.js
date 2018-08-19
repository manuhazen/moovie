import React from 'react';

import SingleActor from './SingleActor';

const ActorsList = ({ actors, loading }) => {
    return (
        <div className="row">
            {
                actors.map(actor => {
                    return (
                        <div className="col" key={actor.id}>
                            <SingleActor actor={actor} />
                        </div>
                    )
                })
            }
        </div> 
    )
};

export default ActorsList;