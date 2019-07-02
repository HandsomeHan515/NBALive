import React, { Component } from 'react'

import Team from './Team'
import { TeamData } from '../data/Msg'

class TeamList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: TeamData
    }
  }

  insert = () => {
    let newTeam = prompt('请输入球队的名字')
    let newTeams = this.state.teams.slice()
    newTeams.unshift({ name: newTeam })

    if (newTeam) {
      this.setState({
        teams: newTeams
      })
    }
  }

  render () {
    return (
      <div>
        <ul className="team">
          {
            this.state.teams.map((e, i) => {
              return (
                <li key={i} className="team-list">
                  <Team team={e.name} />
                </li>
              )
            })
          }
        </ul>
        <span className="addTeam" onClick={this.insert}>+</span>
      </div>
    )
  }
}

export default TeamList