import React, { Component } from 'react'

class Score extends Component {
  render() {
    return (
      <span>
        {this.props.score}
      </span>
    )
  }
}

export default Score