import uuidV1 from 'uuid/v1';
import makeCopies from '../utils/makeCopies';
import * as types from "../consts/types";

const initialState = {
	cards: makeCopies(["red", "green", "blue", "white"], 3)
		.map(el => ({
			id: uuidV1(),
			color: el,
			active: true,
			clicked: false
		}))
};

export default (state = initialState, { type, payload }) => {
	switch(type){
		case types.TOGGLE_CARD_CLICK:{
			return {
				...state,
				cards: state.cards.map(el => 
					el.id === payload 
					? {
						...el,
						clicked: !el.clicked
					} 
					: el)
			}
		}
		default:
			return state;
	}
};
