const ftoc = function(faren) {
  return Math.round(10*(5*((faren-32)/9)))/10;
}

const ctof = function(cels) {
  return Math.round(10*(32+(9*(cels/5))))/10;
}

module.exports = {
  ftoc,
  ctof
}
