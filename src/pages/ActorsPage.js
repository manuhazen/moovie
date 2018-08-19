import React, { Component } from 'react'

import { Card, CardImg, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

export class ActorsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <Card className="actor__card">
            <CardImg></CardImg>
            <CardBody>
              <CardTitle className="h6 actor__card-name">
                Fulanito
              </CardTitle>
              <CardSubtitle className="h6 actor__card-info">
                Birth
              </CardSubtitle>
              <CardSubtitle className="h6 actor__card-info">
                From
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-9 actor__page-info">
          <h4 className="actor__page-info__title">Biography: </h4>
          <p className="actor__page-info__content">
            Biography
          </p>
        </div>

        <div className="col-md-12 movie__list">
          <h1 className="text-center h3 movie__list-title">Movies</h1>
          MoviesCardList Here
        </div>
      </div>
    )
  }
}

export default ActorsPage
