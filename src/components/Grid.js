import React, { Component } from 'react';
import '../css/grid.css';

import Row from '../components/Row'

class Grid extends Component {

  renderRows = () => {
    return (
      this.props.rows.map(row => {
        return(
          <Row cells={ row } />
        );
      })
  );
  }

  render = () => {
    return (
  		 <div className="grid">
        { this.renderRows() }
       </div>
  	);
  }
};

export default Grid;
