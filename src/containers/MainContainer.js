import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from "./../actions/gameActions";
import Card from "../components/Card";

//shuffle


class MainContainer extends Component {
	render(){
		const { toggleCardClick, cards } = this.props;
		
		return <div>
			{cards.map(el => 
				<Card
					key={el.id}
					el={el}
					toggleCardClick={toggleCardClick}/>
			)}
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
