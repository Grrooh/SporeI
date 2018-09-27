//Global
var mobEaten;
var plantEaten;
var color;

//Cell Phase
var cellPower;
var cellLvl;
var xpToLvlUp;

function init() {
	color = 'black';
	cellPower = 0;
	cellLvl = 0;
	xpToLvlUp = xpToLvl(1);
	mobEaten = 0;
	plantEaten = 0;
}

function getRegime() {
	if (mobEaten / (mobEaten + plantEaten) > 0.75) return 'Carnivore';
	else if (plantEaten / (mobEaten + plantEaten) > 0.75) return 'Herbivore';
	else return 'Omnivore';
}

function xpToLvl(lvl) {
	if (lvl === 0) return 0;
	if (lvl === 1) return 5;
	return xpToLvl(lvl - 1) + 5*(lvl-1);
}

function cellClick() {
	cellPower++;
	xpToLvlUp--;
	if (xpToLvl === 0) {
		cellLvl++;
		xpToLvlUp = xpToLvl(cellLvl);
	}

	drawStats();
}
