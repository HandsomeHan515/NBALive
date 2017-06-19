import React, { Component } from 'react'
import { Link } from 'react-router'

import { NavData } from '../data/Msg'

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        {
          NavData.map((e, i) => {
            return (
              <li className="nav-list">
                <Link className="nav-list-a" activeClassName="nav-active" onlyActiveOnIndex={true} to={e.link}>
                  {e.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Nav