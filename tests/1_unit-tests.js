/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32l';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '1.3';
      assert.equal(convertHandler.getNum(input), 1.3);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/3L';
      assert.equal(convertHandler.getNum(input), 0.3333333333333333);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '1.3/2L';
      assert.equal(convertHandler.getNum(input), 0.65);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '1/2/3L';
      assert.equal(convertHandler.getNum(input), null);
      done();
    });
    
    test('No Numerical Input', function(done) {
       var input = 'mi'
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(unit) {
        assert.equal(convertHandler.getUnit(unit), unit);
        done();
      });
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'xyz';
      assert.equal(convertHandler.getUnit(input), null);
      done()
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometres','pounds','kilograms'];
      input.forEach(function(unit, i) {
        assert.equal(convertHandler.spellOutUnit(unit), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [8, 'gal'];
      var expected = 30.28328;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [8, 'L'];
      var expected = 2.11338 ;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Mi to Km', function(done) {
      var input = [8, 'mi'];
      var expected = 12.87472;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Km to Mi', function(done) {
      var input = [8, 'km'];
      var expected = 4.97098;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Lbs to Kg', function(done) {
      var input = [8, 'lbs'];
      var expected = 3.62874;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Kg to Lbs', function(done) {
      var input = [8, 'kg'];
      var expected = 17.637;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
  });

});