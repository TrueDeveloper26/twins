import uuidV1 from 'uuid/v1';
import makeCopies from '../utils/makeCopies';
import * as types from "../consts/types";

const initialState = {
	cards: makeCopies(["red", "green", "blue", "white"], 4)
		.map(el => ({
			id: uuidV1(),
			color: el,
			active: true,
			clicked: false
		})),
	activeCards: []
};

export default (state = initialState, { type, payload }) => {
	switch(type){
		case types.TOGGLE_CARD_CLICK:{
			const { activeCards, cards } = state;

			if(activeCards.length === 0){
				console.log("1");
				return {
					...state,
					activeCards: [...activeCards, payload],
					cards: cards.map(el => 
						el.id === payload.id 
						? {
							...el,
							clicked: !el.clicked
						} 
						: el)
				}
			}else if(activeCards.length === 1){
				console.log("2");
				if(activeCards[0].color === payload.color){
					return {
						...state,
						activeCards: [],
						cards: cards.map(el => 
							el.id === activeCards[0].id ||
							el.id === payload.id 
								? {
									...el,
									clicked: false,
									active: false
								} : el)
					}
				}
				return {
					...state,
					activeCards: [...activeCards, payload],
					cards: cards.map(el => el.id === payload.id ? {
						...el,
						clicked: true
					} : el)

				}
			}else if(activeCards.length === 2){
				console.log("3");
				return {
					activeCards: [payload],
					cards: cards.map(el => 
						el.id === payload.id 
							? { ...el, clicked: true } 
							: {...el, clicked: false }
					)
				}
			}

			
		}
		default:
			return state;
	}
};
