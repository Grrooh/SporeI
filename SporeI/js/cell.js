//Cell Phase
var cellPower;
var cellLvl;

function cellClick() {
	if (cellLvl === 50) {
		drawStats();
		return;
	}

	cellPower++;
	xpToLvlUp--;
	if (xpToLvlUp === 0) {
		cellLvl++;
		xpToLvlUp = xpToLvl(cellLvl);
	}
	drawStats();
}

function getRegime() {
	if (mobEaten / (mobEaten + plantEaten) > 0.75) {
		color = 'red';
		return 'Meat';
	}
	else if (plantEaten / (mobEaten + plantEaten) > 0.75) {
		color = 'green';
		return 'Plants';
	}
	else {
		color = 'black';
		return 'Whatever ;)';
	}
}

function buyFood() {
	if (cellPower >= 20) {
		cellPower = cellPower - 20;
		errorTimer = 0;
		buyFoodBuyed = true;
		$('#buyFood').remove();
	}
	else {
		setError('Not enough DNA');
	}
}