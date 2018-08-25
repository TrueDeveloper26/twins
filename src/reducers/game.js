// import uuidV1 from 'uuid/v1';
import { makeCardsArray, countContainerWidth } from '../utils/helpers';
import * as types from "../consts/types";
import { GAME_CONFIG, ICONS } from "../consts/config";


const initialState = {
	numberOfCards: ICONS.length,
	containerWidth: countContainerWidth(
		GAME_CONFIG.copiesNum
	),
	cards: makeCardsArray(ICONS, GAME_CONFIG.copiesNum),
	activeCards: []
};

export default (state = initialState, { type, payload }) => {
	// console.log(state.cards.length);

	switch(type){
		case types.TOGGLE_CARD_CLICK:{
			const { activeCards, cards } = state;
			switch(activeCards.length){
				case 0:{
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
				}
				case 1:{
					if(activeCards[0].id === payload.id){
						console.log("2");
						return {
							...state,
							activeCards: [],
							cards: cards.map(el => el.id === payload.id ? {
								...el, 
								clicked: false
							} : el)
						}
					}
					if(activeCards[0].color === payload.color){
						console.log("3");
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
					console.log("4");
					return {
						...state,
						activeCards: [...activeCards, payload],
						cards: cards.map(el => el.id === payload.id ? {
							...el,
							clicked: true
						} : el)
					}
				}
				case 2:{
					if(activeCards.some(el => el.id === payload.id)){
						console.log("5");
						return {
							...state,
							activeCards: [],
							cards: cards.map(el => 
								activeCards.some(ell => ell.id === el.id)
								? { ...el, clicked: false } : el)
						}
					}
					console.log("6");

					return {
						...state,
						activeCards: [payload],
						cards: cards.map(el => {
							// prevents unexpected rerendering of ALL elements
							if(el.id === payload.id){
								return { ...el, clicked: true } 
							}else if (el.clicked){
								return { ...el, clicked: false }
							}
							return el;
						})
					}
				}
				default:
					return state;
			}
		}
		default:
			return state;
	}
};
