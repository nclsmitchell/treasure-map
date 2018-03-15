import React, { Component } from 'react';
import '../css/leaderboard.css';


class Leaderboard extends Component {

  renderScores = () => {
    return (
      Object.entries(this.props.scores).map(([key, value]) => {
        return (
          <span>{`${key}: ${value}`}</span>
        );
      })
    );
  }

  render = () => {
    return (
  		 <div className="scores">
        { this.renderScores() }
       </div>
  	);
  }
};

export default Leaderboard;
