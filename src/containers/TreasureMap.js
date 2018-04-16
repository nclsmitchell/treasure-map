import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { parse } from '../actions';

import Button from '../components/Button';
import Textarea from '../components/Textarea';
import Grid from '../components/Grid';
import Pagination from './Pagination';
import Leaderboard from '../components/Leaderboard';

import { INIT_MAP } from '../_config';

import '../css/treasureMap.css';

class TreasureMap extends Component {
	state = {
		value: INIT_MAP
	};

	componentDidMount() {
		this.parse();
	}

	parse = () => {
		const { parse } = this.props;
		const value = this.state.value;
		parse(value);
	};

	handleChange = (input) => {
		this.setState({
			value: input
		});
	};

  renderMap = () => {
    const { parsing, map } = this.props;
    if (map.treasure_map.length > 0) {
        return (
          <div className="map-wrapper">
            <h3>Map</h3>
            <Grid rows={map.treasure_map} />
            <Pagination parsing={parsing.parsing} turn={map.turn} turn_count={map.turn_count} />
          </div>
        );
    }
  }

  renderLeaderboard = () => {
    const { map } = this.props;
    if (Object.keys(map.leaderboard).length > 0) {
      return (
        <div className="leaderboard-wrapper">
          <h3>Leaderboard</h3>
          <Leaderboard scores={map.leaderboard} />
        </div>
      );
    }
  }

	render = () => {
		const { active, loading } = this.props;

		return (
			<div className="wrapper">
				<div className="data-wrapper">
          <h3>Import treasure map data</h3>
					<Textarea
            placeholder="Copy/paste you text file here"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
					<Button
						label="Create map"
						active={active}
						loading={loading}
						onClick={() => this.parse()}
					/>
          { this.renderLeaderboard() }
				</div>
        { this.renderMap() }
			</div>
		);
	};
}

const mstp = state => {
	const { parsing, map } = state;
	return {
    parsing,
		map
	};
};

const mdtp = dispatch => bindActionCreators({ parse }, dispatch);

export default connect(mstp, mdtp)(TreasureMap);
