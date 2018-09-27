//To darw the game
function drawStats() {
	$('#cellPower').text(cellPower);

	if (cellLvl === 50) {
		$('#cellLvl').text('MAX');
	}
	else {
		$('#cellLvl').text(cellLvl);
	}
	$('#food').text(getRegime());
	$('#xpToLvl').text(xpToLvlUp);
	$('#cell').css('color', color);
	if (buyTimeBuyed) {
		$('#secBeforeMutation').text(secBeforeMutation);
	}
}

function drawPowerUps() {
	if (buySaveBuyed && buyFoodBuyed) {
		$('#allowEvol').show();
	}
}

function drawError() {
	if (errorTimer > 0) {
		$('#errorDiv').show();
		errorTimer--;
	}
	else {
		$('#errorDiv').hide();
		$('#errorLabel').text('');
	}
}

function setError(text) {
	$('#errorLabel').text(text);
	errorTimer = 10;
	drawError();
}

function drawAll() {
	drawStats();
	drawPowerUps();
	drawError();
}