import {should} from 'chai';
import {Core, Kore} from "../../src";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

describe("Number", () => {
	describe("Odd", () => {
		it("should return false for floating points", () => {
			5.5.Odd().should.be.false;
			6.1.Odd().should.be.false;
			-5.1.Odd().should.be.false;
		});
		
		it("should return false for zero", () => {
			(0).Odd().should.be.false;
		});
		
		it("should return false for even numbers", () => {
			(-2).Odd().should.be.false;
			(12041920390).Odd().should.be.false;
		});
		
		it("should return true for odd numbers", () => {
			(3).Odd().should.be.true;
			(-9999).Odd().should.be.true;
		});
		
		it("should return false for infinite numbers", () => {
			(5 / 0).Odd().should.be.false;
		});
		
		it("should return false for NaN", () => {
			NaN.Odd().should.be.false;
			parseFloat("test").Odd().should.be.false;
		});
	});
	
	describe("Even", () => {
		
		it("should return false for floating points", () => {
			6.1.Even().should.be.false;
			7.8.Even().should.be.false;
			-8.7.Even().should.be.false;
		});
		
		it("should return false for zero", () => {
			(0).Even().should.be.false;
		});
		
		it("Should return false for odd numbers", () => {
			(5).Even().should.be.false;
			(-887).Even().should.be.false;
			(9999).Even().should.be.false;
		});
		
		it("should return true for even numbers", () => {
			(10).Even().should.be.true;
			(-70).Even().should.be.true;
		});
		
		it("should return false for infinite numbers", () => {
			(20 / 0).Even().should.be.false;
		});
		
		it("should return false for NaN", () => {
			NaN.Even().should.be.false;
			parseFloat("test").Even().should.be.false;
		});
		
	});
	
	describe("Int", () => {
		
		it("should return true for integers", () => {
			(5).Int().should.be.true;
			(0).Int().should.be.true;
			(-7000).Int().should.be.true;
		});
		
		it("should return false floating points", () => {
			0.3.Int().should.be.false;
			25.0003.Int().should.be.false;
			-9.000000001.Int().should.be.false;
		});
		
		it("should return false for infinite numbers", () => {
			(10 / 0).Int().should.be.false;
		});
		
		it("should return false for NaN", () => {
			NaN.Int().should.be.false;
			parseFloat("test").Int().should.be.false;
		});
		
	});
	
	describe("Finite", () => {
		it("should return true for finite numbers", () => {
			(10000000000000).Finite().should.be.true;
			(-974798132).Finite().should.be.true;
		});
		
		it("should return false for inifinite numbers", () => {
			(100 / 0).Finite().should.be.false;
		});
		
		it("should return false for NaN", () => {
			NaN.Finite().should.be.false;
			parseFloat("test").Finite().should.be.false;
		});
	});
	
	describe("Infinite", () => {
		it("should return false for finite numbers", () => {
			(10000000000000).Infinite().should.be.false;
			(-974798132).Infinite().should.be.false;
		});
		
		it("should return true for inifinite numbers", () => {
			(100 / 0).Infinite().should.be.true;
		});
		
		it("should return false for NaN", () => {
			NaN.Infinite().should.be.false;
			parseFloat("test").Infinite().should.be.false;
		});
	});
	
	describe("NaN", () => {
		
		it("should return true for NaN", () => {
			NaN.NaN().should.be.true;
			parseFloat("test").NaN().should.be.true;
		});
		
		it("should return false for infinity", () => {
			(5 / 0).NaN().should.be.false;
		});
		
		it("should return false for normal numbers", () => {
			5.001.NaN().should.be.false;
			(-700).NaN().should.be.false;
			3.1415926.NaN().should.be.false;
		});
	});
	
	describe("RoundOff", () => {
		
		it("should return same number if number is infinite", () => {
			let x: number = 5 / 0;
			(() => x.RoundOff()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is not a number", () => {
			(() => NaN.RoundOff()).should.throw("Invalid Number");
		});
		
		it("should return same integer is number is integer", () => {
			(7).RoundOff().should.equal(7);
			(-1.000).RoundOff().should.equal(-1);
			(0).RoundOff().should.equal(0);
			(10000).RoundOff().should.equal(10000);
			
		});
		
		it("should round up if it is 0.5 and above", () => {
			7.5.RoundOff().should.equal(8);
			992.51.RoundOff().should.equal(993);
			(-70.5).RoundOff().should.equal(-71);
			(-999.8).RoundOff().should.equal(-1000);
		});
		
		it("should round down if it is below 0.5", () => {
			7.3.RoundOff().should.equal(7);
			992.21.RoundOff().should.equal(992);
			(-70.1).RoundOff().should.equal(-70);
			(-999.0).RoundOff().should.equal(-999);
		});
		
	});
	
	describe("Floor", () => {
		it("should return same number if number is infinite", () => {
			let x: number = 5 / 0;
			(() => x.Floor()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is not a number", () => {
			(() => NaN.Floor()).should.throw("Invalid Number");
		});
		
		it("should return same integer is number is integer", () => {
			(7).Floor().should.equal(7);
			(-1.000).Floor().should.equal(-1);
			(0).Floor().should.equal(0);
			(10000).Floor().should.equal(10000);
			(-75).Floor().should.equal(-75);
		});
		
		it("should down if its a floating point unit", () => {
			(7.8).Floor().should.equal(7);
			(-1.8).Floor().should.equal(-1);
			(0.9).Floor().should.equal(0);
			(10000.2634).Floor().should.equal(10000);
			(-75.888).Floor().should.equal(-75);
		});
	});
	
	describe("Ceil", () => {
		it("should return same number if number is infinite", () => {
			let x: number = 5 / 0;
			(() => x.Ceil()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is not a number", () => {
			(() => NaN.Ceil()).should.throw("Invalid Number");
		});
		
		it("should return same integer is number is integer", () => {
			(7).Ceil().should.equal(7);
			(-1.000).Ceil().should.equal(-1);
			(0).Ceil().should.equal(0);
			(10000).Ceil().should.equal(10000);
			(-75).Ceil().should.equal(-75);
		});
		
		it("should down if its a floating point unit", () => {
			(7.8).Ceil().should.equal(8);
			(-1.8).Ceil().should.equal(-2);
			(0.9).Ceil().should.equal(1);
			10000.2634.Ceil().should.equal(10001);
			(-75.888).Ceil().should.equal(-76);
		});
	});
	
	describe("Abs", () => {
		
		it("should throw exception if number is not a number", () => {
			(() => NaN.Abs()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is infinite", () => {
			(() => (7 / 0).Abs()).should.throw("Invalid Number");
		});
		
		it("should return absolute of the number", () => {
			(-5).Abs().should.equal(5);
			(-1042.55).Abs().should.equal(1042.55);
			(72).Abs().should.equal(72);
			(0).Abs().should.equal(0);
		});
		
		
	});
	
	describe("Root", () => {
		
		it("should throw exception if number is not a number", () => {
			(() => NaN.Root()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is infinite", () => {
			(() => (7 / 0).Root()).should.throw("Invalid Number");
		});
		
		it("should return SqaureRoot of the number", () => {
			(25).Root().should.equal(5);
			(92).Root().should.equal(Math.sqrt(92));
		});
		
		it("should throw exception if number is negative", () => {
			(() => (-1).Root()).should.throw("Can't root negative");
		});
		
	});
	
	describe("ToInt", () => {
		it("should throw exception if number is not a number", () => {
			(() => NaN.ToInt()).should.throw("Invalid Number");
		});
		
		it("should throw exception if number is infinite", () => {
			(() => (7 / 0).ToInt()).should.throw("Invalid Number");
		});
		it("should throw exception if string cannot be converted to number", () => {
			(() => ("kirin~").ToInt()).should.throw("Invalid Number");
		});
		it("should convert number to int", () => {
			(5.8).ToInt().should.equal(5);
			(-3.5).ToInt().should.equal(-3);
			(2000).ToInt().should.equal(2000);
			
		});
		
		it("should convert string to int", () => {
			"5.8".ToInt().should.equal(5);
			"-3.5".ToInt().should.equal(-3);
			"2000".ToInt().should.equal(2000);
		});
		
	});
	
	describe("ToFloat", () => {
		it("should throw exception if number is not a number", () => {
			(() => NaN.ToFloat()).should.throw("Invalid Number");
			
		});
		
		it("should throw exception if number is infinite", () => {
			(() => (7 / 0).ToFloat()).should.throw("Invalid Number");
			
		});
		it("should throw exception if string cannot be converted to number", () => {
			(() => "kirin~".ToFloat()).should.throw("Invalid Number");
			
		});
		it("should convert number to float", () => {
			(5.8).ToFloat().should.equal(5.8);
			(-3.5).ToFloat().should.equal(-3.5);
			(2000).ToFloat().should.equal(2000);
			
		});
		
		it("should convert string to float", () => {
			"5.8".ToFloat().should.equal(5.8);
			"-3.5".ToFloat().should.equal(-3.5);
			"2000".ToFloat().should.equal(2000);
		});
	});
	
	describe("AtMax", () => {
		it("should return the max number if the number exceeds the max number", () => {
			(5).AtMax(3).should.equal(3);
		});
		
		it("should return original number if the number does not exceed the max number", () => {
			(5).AtMax(10).should.equal(5);
		});
	});
	
	describe("AtMin", () => {
		it("should return the minimum number if the number goes below the min number", () => {
			(7).AtMin(10).should.equal(10);
		});
		it("should return the original number if the number does not go belwo the min number", () => {
			(7).AtMin(6).should.equal(7);
		});
	});
	
	describe("Clamp", () => {
		it("should limit the number to the lower number", () => {
			(5).Clamp(7, 12).should.equal(7);
			(5).Clamp(12, 7).should.equal(7);
		});
		it("should limit the number to the higher number", () => {
			(5).Clamp(1, 3).should.equal(3);
			(5).Clamp(3, 1).should.equal(3);
		});
		
		it("should not limit the number if falls between the 2 numbers", () => {
			(5).Clamp(3, 12).should.equal(5);
			(5).Clamp(12, 3).should.equal(5);
		});
	});
	
	describe("RandomFor", () => {
		it("should generate a number between the range", () => {
			for (let i = 0; i < 1000; i++) {
				(5).RandomFor(6).should.approximately(8, 3);
			}
		});
	});
	
	describe("RandomTo", () => {
		it("should generate a number between the range", () => {
			for (let i = 0; i < 1000; i++) {
				(2).RandomTo(6).should.approximately(4, 2);
			}
		});
	});
});