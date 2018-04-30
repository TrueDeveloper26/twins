import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from "./../actions/gameActions";

//shuffle


class MainContainer extends Component {
	render(){
		const { toggleCardClick, cards } = this.props;
		return <div>
			{cards.map(el => <div 
				key={el.id}
				onClick={el.active ? toggleCardClick.bind(null, el) : null}
				className="card"
				style={{background: el.active 
					? (el.clicked 
							? el.color 
							: "#ddd") 
					: "#000"}}/>)}			
		</div>;
	}
}

export default connect(
	state => {
		// console.log(state.game.activeCards);
		return ({cards: state.game.cards})
	},
	dispatch => bindActionCreators(gameActions, dispatch)
)(MainContainer);
