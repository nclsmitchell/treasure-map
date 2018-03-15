import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_map } from '../actions';

import Controller from '../components/Controller'

import '../css/pagination.css';

class Pagination extends Component {

  get_map = (i) => {
    const { get_map } = this.props;
    const parsing = this.props.parsing;
    get_map(parsing, i);
  };

  render = () => {
    const { turn, turn_count } = this.props

    if (turn === 0) {
      return (
        <div className="map-pagination">
          <Controller label="<<" active={false} />
          <Controller label="<" active={false} />
          <Controller label=">" active={true} onClick={() => this.get_map(turn + 1)} />
          <Controller label=">>" active={true} onClick={() => this.get_map(turn_count)} />
        </div>
      );
    }
    else if (turn === turn_count) {
      return (
        <div className="map-pagination">
        <Controller label="<<" active={true} onClick={() => this.get_map(0)} />
        <Controller label="<" active={true} onClick={() => this.get_map(turn - 1)} />
          <Controller label=">" active={false} />
          <Controller label=">>" active={false} />
        </div>
      );
    }
    else {
      return (
        <div className="map-pagination">
          <Controller label="<<" active={true} onClick={() => this.get_map(0)} />
          <Controller label="<" active={true} onClick={() => this.get_map(turn - 1)} />
          <Controller label=">" active={true} onClick={() => this.get_map(turn + 1)} />
          <Controller label=">>" active={true} onClick={() => this.get_map(turn_count)} />
        </div>
      );
    }
  }
}

const mstp = state => {
	const { map } = state;
	return {
		map
	};
};

const mdtp = dispatch => bindActionCreators({ get_map }, dispatch);

export default connect(mstp, mdtp)(Pagination);
