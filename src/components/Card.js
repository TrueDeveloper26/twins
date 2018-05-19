import React, { PureComponent } from "react";

class Card extends PureComponent {
	render(){
		console.log("rerender test");

		const { el, toggleCardClick } = this.props;
		const { active, clicked, color } = el;

		const style = {
			background: active 
				? (clicked ? color : "#ddd") : "#000"
		};

		return <div 
			onClick={active ? toggleCardClick.bind(null, el) : null}
			className="card"
			style={style} />;
	}
}


export default Card;
