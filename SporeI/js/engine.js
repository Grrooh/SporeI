//initiate the game
function initSpore() {
	color = 'black';
	cellPower = 1000;
	cellLvl = 0;
	xpToLvlUp = xpToLvl(1);
	mobEaten = 0;
	plantEaten = 0;
	secBeforeMutation = 0;
	errorTimer = 0;

	buyTimeBuyed = false;
	buyFoodBuyed = false;
	buySaveBuyed = false;
	allowEvolBuyed = false;

	sporeTimer = new timer();
	sporeTimer.start(function () {
		runTime();
	}, 1000, true);
}

//calculate nb of xp needed to lvlUp to lvl in param
function xpToLvl(lvl) {
	if (lvl === 0) return 0;
	if (lvl === 1) return 5;
	return xpToLvl(lvl - 1) + 5*(lvl-1);
}

function buyTime() {
	if (cellPower >= 10) {
		cellPower = cellPower - 10;
		errorTimer = 0;
		//Launch a global timer to run HISTORY, launch runTime() every 10 sec
		$('#buyTime').remove();
		$('#mutation').show();
		$('#buyFood').show();
		$('#buySave').show();

		buyTimeBuyed = true;
		secBeforeMutation = 10;
	}
	else {
		setError('Not enough DNA');
	}
}

function buySave() {
	if (cellPower >= 20) {
		cellPower = cellPower - 20;
		errorTimer = 0;
		$('#buySave').remove();
		$('#saveButton').show();
		buySaveBuyed = true;
	}
	else {
		setError('Not enough DNA');
	}
}

function allowEvol() {
	if (cellPower >= 30) {
		cellPower = cellPower - 30;
		$('#loveCry').show();
		$('#allowEvol').remove();
		allowEvolBuyed = true;
	}
	else {
		setError('Not Enough DNA');
	}
}

function saveGame() {
	setError('Save Button Activated');
}

function runMutation() {
	cellClick();
}

function runTime() {
	if (buyTimeBuyed) {
		secBeforeMutation--;
		if (secBeforeMutation === 0) {
			runMutation();
			secBeforeMutation = 10;
		}
	}
	drawAll();
}

function loveCry() {
	setError('LOVE CRY <3');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function setError(text) {
	$('#errorLabel').text(text);
	errorTimer = 10;
	drawError();
}

//Manage a timer
function timer() {
	var timer = {
		running: false,
		iv: 5000,
		timeout: false,
		cb: function () { },
		start: function (cb, iv, sd) {
			var elm = this;
			clearInterval(this.timeout);
			this.running = true;
			if (cb) this.cb = cb;
			if (iv) this.iv = iv;
			if (sd) elm.execute(elm);
			this.timeout = setTimeout(function () { elm.execute(elm); }, this.iv);
		},
		execute: function (e) {
			if (!e.running) return false;
			e.cb();
			e.start();
		},
		stop: function () {
			this.running = false;
		},
		set_interval: function (iv) {
			clearInterval(this.timeout);
			this.start(false, iv);
		}
	};
	return timer;
}