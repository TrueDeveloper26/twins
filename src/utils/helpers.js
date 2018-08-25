export const makeCopies = (original, amount) => {
	let arr = [];
	for(let i=0; i<amount; i++){
		arr = arr.concat(original);
	}
	return arr;
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export const shuffleArray = arr => {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

export const makeCardsArray = (iconsArr, copiesNum) => 
	shuffleArray(makeCopies(iconsArr, copiesNum)
		.map((el, i) => ({
			id: i + 1,
			color: el,
			active: true,
			clicked: false
		})));

export const countContainerWidth = copiesNum => {
	switch(copiesNum){
		case 2: return 300;
		case 4: return 400;
		case 6: return 600;
		case 8: return 800;
		default: return 800; 
	}
};
