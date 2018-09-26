module.exports = function getZerosCount(number) {
  var rezult = 0;
for(var i = 5 ; i<=number ; i=i*5){
	var y = Math.floor(number/i);
	rezult += y;
}
	return rezult;
}
