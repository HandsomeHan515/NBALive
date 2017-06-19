import React, { Component } from 'react'

import Team from './Team'
import { TeamData } from '../data/Msg'

class TeamList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      Data: TeamData
    }
    this.insert = this.insert.bind(this)
  }

  insert() {
    var newTeam = prompt('请输入球队的名字')
    this.state.Data.unshift({name:newTeam})
    let newTeamData = this.state.Data.slice()
    if (newTeam) {
      this.setState ({
        Data: newTeamData
      })
    }
  }

  render() {
    return (
      <div>
        <ul className="team">
          {
            this.state.Data.map((e, i) => {
              return (
                <li className="team-list">
                  <Team team={e.name} />
                </li>
              )
            })
          }
        </ul>
        <span className="addTeam" onClick={() => this.insert()}>+</span>
      </div>
    )
  }
}

export default TeamList