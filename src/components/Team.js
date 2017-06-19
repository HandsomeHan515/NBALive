import React, { Component } from 'react'

class Team extends Component {
  render() {
    return (
      <span className="team-list-con">
        {this.props.team}
      </span>
    )
  }
}

export default Team