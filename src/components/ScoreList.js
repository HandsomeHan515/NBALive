import React, { Component } from 'react'

import Team from './Team'
import Score from './Score'
import { ScoreData } from '../data/Msg'

class ScoreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: ScoreData
    }
    this.as = this.as.bind(this)
  }

  as(item, val) {
    let newData = this.state.Data.slice()
    newData[item].score1 = newData[item].score1 + val
    if(newData[item].score1 > 88) {
      alert('已到达最大值！！！')
      newData[item].score1 = 88
    }else if(newData[item].score1 < 76){
      alert('已到达最小值！！！')
      newData[item].score1 =76
    }
    this.setState({
      Data: newData
    })
    
  }

  render() {
    return (
      <ul className="score">
        {
          this.state.Data.map((e, i) => {
            return (
              <li className="score-list">
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
    );
  }
}

export default ScoreList