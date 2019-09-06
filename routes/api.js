'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      input = input.toLowerCase()
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if (initNum === null && initUnit === null)
        return res.send('invalid number and unit')
      else if (initNum === null)
          return res.send('invalid number')
      else if (initUnit === null)
        return res.send('invalid unit')

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      })
    });
    
};
