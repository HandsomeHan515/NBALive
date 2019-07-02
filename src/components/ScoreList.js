import React, { Component } from 'react'

import Team from './Team'
import Score from './Score'
import { ScoreData } from '../data/Msg'

class ScoreList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: ScoreData
    }
  }

  as = (item, val) => {
    let newScore = this.state.score.slice()
    newScore[item].score1 += val
    if (newScore[item].score1 > 88) {
      alert('已到达最大值！！！')
      newScore[item].score1 = 88
    } else if (newScore[item].score1 < 76) {
      alert('已到达最小值！！！')
      newScore[item].score1 = 76
    }

    this.setState({
      score: newScore
    })
  }

  render () {
    return (
      <ul className="score">
        {
          this.state.score.map((e, i) => {
            return (
              <li key={i} className="score-list">
                <div>
                  <Team team={e.name1} />
                  <span>VS</span>
                  <Team team={e.name2} />
                </div>
                <div>
                  <Score score={e.score1} />
                  <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
                  <Score score="85" />
                </div>
                <div>
                  <span className="add" onClick={() => this.as(i, 1)}>&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</span>
                  <span className="sub" onClick={() => this.as(i, -1)}>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default ScoreList