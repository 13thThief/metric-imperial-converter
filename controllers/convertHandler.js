function ConvertHandler() {
  
  this.getNum = function(input) {
    let number = input.split(/[a-z]/)[0];
    if(number === '')
      return 1;
    else if(/\//.test(number)){
      // Case: 2.3/2/3
      if(number.split('/').length > 2){
        return null;
      }
      number = number.split('/');

      let first = parseFloat(number[0]);
      let second = parseFloat(number[1]);

      // second cannot be 0 or less
      if(second > 0)
        return first/second;
      return null;
    }
    else if(isNaN(number))
      return null;
    else return parseFloat(number);
  };
  
  this.getUnit = function(input) {
    let unit = input.split(/([A-Za-z]+)/)[1];
    if(unit === 'l') unit = 'L'
    let units = ['mi', 'km', 'L', 'gal', 'kg', 'lbs' ];
    if(units.indexOf(unit) > -1)
      return unit;
    return null;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(!initUnit)
      return null;
    switch(initUnit){
      case 'gal': return 'L';
      case 'mi' : return 'km';
      case 'lbs': return 'kg';
      case 'L'  : return 'gal';
      case 'km' : return 'mi';
      case 'kg' : return 'lbs';
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case 'gal': return 'gallons';
      case 'mi': return 'miles';
      case 'lbs': return 'pounds';
      case 'L': return 'litres';
      case 'km': return 'kilometres';
      case 'kg': return 'kilograms';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if(!initUnit)
      return null;
    switch(initUnit){
      case 'gal': return initNum * galToL;
      case 'mi' : return initNum * miToKm;
      case 'lbs': return initNum * lbsToKg;
      case 'L'  : return initNum * (1/galToL);
      case 'km' : return initNum * (1/miToKm);
      case 'kg' : return initNum * (1/lbsToKg);
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${Math.round(initNum * 1e5) / 1e5} ${this.spellOutUnit(initUnit)} converts to ${Math.round(returnNum*1e5)/1e5} ${this.spellOutUnit(returnUnit)}`
  };
}

module.exports = ConvertHandler;
