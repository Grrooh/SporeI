function drawStats() {
	$('#cellPower').val(cellPower);
	$('#regime').val(getRegime());
	$('#xpToLvl').val(xpToLvl(cellLvl));
	$('#cell').css('text-color', color);
}