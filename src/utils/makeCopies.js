export default (original, amount) => {
	let arr = [];
	for(let i=0; i<amount; i++){
		arr = arr.concat(original);
	}
	return arr;
}
