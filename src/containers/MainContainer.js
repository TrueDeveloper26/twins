import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from "./../actions/gameActions";
import Card from "../components/Card";


class MainContainer extends Component {
	render(){
		const { toggleCardClick, cards, containerWidth } = this.props;
		const containerStyle = {width: `${containerWidth}px`};

		return <div 
			className="cards-container" 
			style={containerStyle}>
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
	state => ({ 
		cards: state.game.cards,
		containerWidth: state.game.containerWidth,
	}),
	dispatch => bindActionCreators(gameActions, dispatch)
)(MainContainer);
