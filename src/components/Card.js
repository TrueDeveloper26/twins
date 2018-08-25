import React, { PureComponent } from "react";

class Card extends PureComponent {
	render(){
		// console.log("rerender");

		const { el, toggleCardClick } = this.props;
		const { active, clicked, color } = el;

		return <div 
			onClick={active ? toggleCardClick.bind(null, el) : null}
			className={active 
				? (clicked 
						? "card icon icon-" + color + " card--icon"
						: "card card--shadow") 
				: "card card--black"}
		/>;
	}
}


export default Card;
