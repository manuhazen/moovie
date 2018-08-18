import React, { Component } from 'react'

export class HomePage extends Component {

  componentWillMount() {
    console.log('mounted!')
  }


  render() {
    return (
      <div>
        <h1 className="text-center page-title">Popular Movies</h1>
        <div className="row">
          <div className="col-md-12">
            // Movies Card List with Movies Cards
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
