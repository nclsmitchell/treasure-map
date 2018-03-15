import React, { Component } from 'react';
import '../css/row.css';

import Cell from '../components/Cell'

class Row extends Component {

  renderCells = () => {
    return (
      this.props.cells.map(cell => {
        return (
          <Cell value={ cell }/>
        );
      })
    );
  }

  render = () => {
    return (
  		 <div className="row">
        { this.renderCells() }
       </div>
  	);
  }
};

export default Row;
