import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top mv-header">
          <NavLink className="navbar-brand" to="/"></NavLink>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarContent" aria-controls="navBarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navBarContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/upcoming">Coming Soon</NavLink>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    )
  }
}

export default Header
