import {should} from 'chai';
import {Core, Kore} from "../../src";

should();

class Mock1 {
	a: string;
	b: number;
	
	constructor(a: string, b: number) {
		this.a = a;
		this.b = b;
	}
	
	Repeat(): string {
		return this.a.repeat(this.b);
	}
}

class Mock2 {
	a: string;
	b: number;
	
	constructor(a: string, b: number) {
		this.a = a;
		this.b = b;
	}
	
	Repeat(): string {
		return this.a.repeat(this.b);
	}
}

let core: Core = new Kore();
core.ExtendPrimitives();

describe("Core", () => {
	
	
	describe("Extended", () => {
		it("should be extended", () => {
			core.IsExtended.should.be.true;
		});
		
		it("should not throw error when exerted", () => {
			core.AssertExtend();
			
		});
	});
	
	describe("DeepEqual", () => {
		
		describe("null and undefined comparison", () => {
			it("should return true for null null", () => {
				core.DeepEqual(null, null).should.be.true;
			});
			
			it("should return true undefined undefined", () => {
				core.DeepEqual(undefined, undefined).should.be.true;
			});
			
			it("should return false null undefined", () => {
				core.DeepEqual(null, undefined).should.be.false;
			});
		});
		
		describe("string comparison", () => {
			
			it("should return true for regex comparison that are the same", () => {
				core.DeepEqual('/abc/', '/abc/').should.be.true;
			});
			
			it("should return false for regex comparison that are different", () => {
				core.DeepEqual('/abc/', '/def/').should.be.false;
				core.DeepEqual('/abc/', 'abc').should.be.false;
			});
			
			it("should return true for string that are the same", () => {
				core.DeepEqual('test', 'test').should.be.true;
				core.DeepEqual("kirin test", "kirin test").should.be.true;
			});
			
			it("should return false for string that are different", () => {
				core.DeepEqual('test', 'test1').should.be.false;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual('test', null).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual('test', undefined).should.be.false;
			});
			
			it("should return false when comparing to functions", () => {
				core.DeepEqual('test', (s: string) => { return s + 5 }).should.be.false;
			});
			
			it("should return false when comparing to number", () => {
				core.DeepEqual('77', 77).should.be.false;
			});
			
			it("should return false when comparing to boolean", () => {
				core.DeepEqual('77', false).should.be.false;
			});
			
			it("should return false when comparing to array", () => {
				core.DeepEqual('77', ['77']).should.be.false;
			});
			
			it("should return false when comapring to object", () => {
				core.DeepEqual('77', {77: '77'}).should.be.false;
			});
			
			
		});
		
		describe("regex comparison", () => {
			
			it("should return true for RegExp of same value", () => {
				core.DeepEqual(new RegExp('abc'), new RegExp('abc')).should.be.true;
			});
			
			it("should return false for RegExp of different value", () => {
				core.DeepEqual(new RegExp('abc'), new RegExp('def')).should.be.false;
			});
			
			it("should return false when comparing to string", () => {
				core.DeepEqual(new RegExp('test'), 'test').should.be.false;
			});
			
			it("should return false when comparing to regex string", () => {
				core.DeepEqual(new RegExp('test'), '/test/').should.be.false;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual(new RegExp('test'), null).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual(new RegExp('test'), undefined).should.be.false;
			});
			
			it("should return false when comparing to functions", () => {
				core.DeepEqual(new RegExp('test'), (s: string) => s + 5).should.be.false;
			});
			
			it("should return false when comparing to number", () => {
				core.DeepEqual(new RegExp('55.6'), 55.6).should.be.false;
			});
			
			it("should return false when comparing to boolean", () => {
				core.DeepEqual(new RegExp('true'), true).should.be.false;
			});
			
			it("should return false when comparing to array", () => {
				// noinspection Annotator
				// noinspection Annotator
				core.DeepEqual(new RegExp('[1,5,3,6]'), [1, 5, 3, 6]).should.be.false;
			});
			
			it("should return false when comapring to object", () => {
				core.DeepEqual(new RegExp('{a:3,c:7}'), {a: 3, c: 7}).should.be.false;
			});
			
		});
		
		describe("number comparison", () => {
			it("should return true for number of same value", () => {
				core.DeepEqual(5, 5).should.be.true;
			});
			
			it("should return false for number of different value", () => {
				core.DeepEqual(5, 12).should.be.false;
				core.DeepEqual(5 / 0, 5).should.be.false;
				core.DeepEqual(NaN, 5).should.be.false;
			});
			
			it("should return true for infinity values", () => {
				core.DeepEqual(10 / 0, 5 / 0).should.be.true;
			});
			
			it("should return true for NaN values", () => {
				core.DeepEqual(NaN, NaN).should.be.true;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual(null, 5).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual(undefined, 5).should.be.false;
			});
			
			it("should return false when comparing to functions", () => {
				core.DeepEqual(5, (s: string) => parseInt(s)).should.be.false;
			});
			
			it("should return false when comparing to boolean", () => {
				core.DeepEqual(5, true).should.be.false;
			});
			
			it("should return false when comparing to array", () => {
				core.DeepEqual(5, [5]).should.be.false;
			});
			
			it("should return false when comapring to object", () => {
				core.DeepEqual(5, {a: 5}).should.be.false;
			});
			
		});
		
		describe("boolean comparison", () => {
			it("should return true when booleans are same value ", () => {
				core.DeepEqual(true, true).should.be.true;
			});
			
			it("should return false when comparing to string", () => {
				core.DeepEqual(true, false).should.be.false;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual(true, null).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual(true, undefined).should.be.false;
			});
			
			it("should return false when comparing to functions", () => {
				core.DeepEqual(true, (b: number) => b.toString());
			});
			
			it("should return false when comparing to array", () => {
				core.DeepEqual(true, [true]).should.be.false;
			});
			
			it("should return false when comapring to object", () => {
				core.DeepEqual(true, {a: true}).should.be.false;
			});
		});
		
		describe("function comparison", () => {
			it("should return true when functions are the same", () => {
				core.DeepEqual((s: string) => parseFloat(s), (s: string) => parseFloat(s)).should.be.true;
			});
			
			it("should return false when functions are different", () => {
				core.DeepEqual((s: string) => parseFloat(s), (f: string) => parseInt(f)).should.be.false;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual((s: string) => parseFloat(s), null).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual((s: string) => parseFloat(s), undefined).should.be.false;
			});
			
			it("should return false when comparing to array", () => {
				core.DeepEqual((s: string) => parseFloat(s), [(s: string) => parseFloat(s)]).should.be.false;
				core.DeepEqual((s: string) => parseFloat(s), [1, 4, 5, 6]).should.be.false;
			});
			
			it("should return false when comparing to object", () => {
				core.DeepEqual((s: string) => parseFloat(s), new Mock1("a", 5)).should.be.false;
				core.DeepEqual((s: string) => parseFloat(s), {f: (s: string) => parseFloat(s)}).should.be.false;
			});
		});
		
		describe("date comparison", () => {
			it("should return true for dates that are the same", () => {
				core.DeepEqual(new Date(2018, 12, 25, 15, 56), new Date(2018, 12, 25, 15, 56)).should.be.true;
			});
			
			it("should return false for dates that are different", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), new Date(2018, 12, 25, 12, 13)).should.be.false;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), null).should.be.false;
			});
			
			it("should return false when comparing to undefined", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), undefined).should.be.false;
			});
			
			it("should return false when comparing to array", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), [new Date(2018, 12, 25, 12, 12)]).should.be.false;
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), [1, 2, 3]).should.be.false;
			});
			
			it("should return false when comparing to object", () => {
				
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), {a: new Date(2018, 12, 25, 12, 12)}).should.be.false;
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), new Mock1("tees", 5)).should.be.false;
				
			});
			
			it("should return false when comparing to boolean", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), false).should.be.false;
			});
			
			it("should return false when comparing to string", () => {
				core.DeepEqual(new Date(2018, 12, 25, 12, 12), false).should.be.false;
			});
			
		});
		
		describe("array comparison", () => {
			it("should return true for arrays that are exactly same in value", () => {
				core.DeepEqual([5, 3, 5, 6], [5, 3, 5, 6]).should.be.true;
				
			});
			
			it("Should return true for arrays that have exactly same objects", () => {
				let a1: Mock1 = new Mock1("a", 7);
				let a2: Mock1 = new Mock1("b", -3);
				let a3: Mock1 = new Mock1("c", 12);
				
				let b1: Mock1 = new Mock1("a", 7);
				let b2: Mock1 = new Mock1("b", -3);
				let b3: Mock1 = new Mock1("c", 12);
				
				core.DeepEqual([a1, a2, a3], [b1, b2, b3]).should.be.true;
			});
			
			it("should return false when comparing to null", () => {
				core.DeepEqual([5, 6, 7, 3], null).should.be.false;
			});
			it("should return false when comparing to undefined", () => {
				core.DeepEqual([5, 6, 7, 3], undefined).should.be.false;
			});
			it("should return false when comparing to array with different values", () => {
				let a1: Mock2 = new Mock2("a", 7);
				let a2: Mock2 = new Mock2("b", -3);
				let a3: Mock2 = new Mock2("c", 12);
				
				let b1: Mock1 = new Mock1("a", 7);
				let b2: Mock1 = new Mock1("b", -3);
				let b3: Mock1 = new Mock1("c", 12);
				
				core.DeepEqual([a1, a2, a3], [b1, b2, b3]).should.be.false;
				core.DeepEqual([5, 1, 3], [5, 1, 4]).should.be.false;
				
			});
			
			it("should return false when comparing to object", () => {
				let a1: Mock2 = new Mock2("a", 7);
				let a2: Mock2 = new Mock2("b", -3);
				let a3: Mock2 = new Mock2("c", 12);
				
				let b1: Mock1 = new Mock1("a", 7);
				core.DeepEqual([a1, a2, a3], b1).should.be.false;
				core.DeepEqual([a1, a2, a3], {0: a1, 1: a2, 2: a3}).should.be.false;
				core.DeepEqual([1, 2, 3], {0: 1, 1: 2, 2: 3}).should.be.false;
			});
			
		});
		
		describe("object comparison", () => {
			
			it("should return false for object and array comparison", () => {
				core.DeepEqual({}, [1]).should.be.false;
			});
			
			it("should return true if every property are equal", () => {
				let a1: Mock1 = new Mock1("kirin test", 12);
				let a2: Mock1 = new Mock1("kirin test", 12);
				
				core.DeepEqual(a1, a2).should.be.true;
				core.DeepEqual(
					{
						a: "test"
						, b: 12
						, c: true
						, d: new Mock1("5", 3)
						, e: [new Mock2("c", 3), new Mock2("e", 12)]
						, f: {a: "~~", b: [1, 2, 3]},
					},
					{
						a: "test"
						, b: 12
						, c: true
						, d: new Mock1("5", 3)
						, e: [new Mock2("c", 3), new Mock2("e", 12)]
						, f: {a: "~~", b: [1, 2, 3]}
					}).should.be.true;
				
			});
			
			it("should return false when not even a single property is different", () => {
				
				let a1: Mock1 = new Mock1("kirin test", 12);
				let a2: Mock1 = new Mock1("kirin test", 13);
				
				core.DeepEqual(a1, a2).should.be.false;
				
				core.DeepEqual(
					{
						a: "test"
						, b: 12
						, c: true
						, d: new Mock1("5", 3)
						, e: [new Mock2("c", 3), new Mock2("e", 12)]
						, f: {a: "~~", b: [1, 3, 3]},
					},
					{
						a: "test"
						, b: 12
						, c: true
						, d: new Mock1("5", 3)
						, e: [new Mock2("c", 3), new Mock2("e", 12)]
						, f: {a: "~~", b: [1, 2, 3]}
					}).should.be.false;
			});
			
			it("should return false when property are the same, but type is different", () => {
				let a1: Mock1 = new Mock1("kirin test", 12);
				let a2: Mock2 = new Mock2("kirin test", 13);
				
				core.DeepEqual(a1, a2).should.be.false;
			});
		});
		
	});
	
	describe("IsAnyString", () => {
		it("should return false for null", () => {
			core.IsAnyString(null).should.be.false;
		});
		
		it("should return false for undefined", () => {
			core.IsAnyString(undefined).should.be.false;
		});
		
		it("should return false for everything else", () => {
			core.IsAnyString(5).should.be.false;
			core.IsAnyString(false).should.be.false;
			core.IsAnyString([]).should.be.false;
			core.IsAnyString({}).should.be.false;
			core.IsAnyString(NaN).should.be.false;
		});
		
		it("should return true for string primitive", () => {
			let x: string = "~ ";
			core.IsAnyString(x).should.be.true;
		});
		
		it("should return true for string objects", () => {
			let x: String = "~~";
			core.IsAnyString(x).should.be.true;
		});
		
		it("should return true for empty string", () => {
			core.IsAnyString("").should.be.true;
		});
		
	});
	
	describe("IsString", () => {
		it("should return false for null", () => {
			core.IsString(null).should.be.false;
		});
		
		it("should return false for undefined", () => {
			core.IsString(undefined).should.be.false;
		});
		
		it("should return false for everything else", () => {
			core.IsString(5).should.be.false;
			core.IsString(false).should.be.false;
			core.IsString([]).should.be.false;
			core.IsString({}).should.be.false;
			core.IsString(NaN).should.be.false;
		});
		
		it("should return true for string primitive", () => {
			let s: string = "string~!";
			core.IsString(s).should.be.true;
		});
		
		it("should return true for string objects", () => {
			let s: String = "string~!";
			core.IsString(s).should.be.true;
		});
		
		it("should return false for empty string", () => {
			core.IsString("").should.be.false;
		});
		
		it("should return false for trimmed empty string", () => {
			core.IsString("   ").should.be.false;
		});
	});
	
	describe("IsAnyNumber", () => {
		it("should return false for null", () => {
			core.IsAnyNumber(null).should.be.false;
		});
		
		it("should return false for undefined", () => {
			core.IsAnyNumber(undefined).should.be.false;
		});
		
		it("should return false for everything else", () => {
			core.IsAnyNumber("").should.be.false;
			core.IsAnyNumber("lame").should.be.false;
			core.IsAnyNumber(false).should.be.false;
			core.IsAnyNumber([]).should.be.false;
			core.IsAnyNumber({}).should.be.false;
		});
		
		it("should return false for string primitive that cannot become numbers", () => {
			let s1: string = "t35tlol";
			let s2: string = "test test";
			core.IsAnyNumber(s1).should.be.false;
			core.IsAnyNumber(s2).should.be.false;
		});
		
		it("should return false for string object that cannot become numbers", () => {
			let s1: String = "t35tlol";
			let s2: String = "test test";
			core.IsAnyNumber(s1).should.be.false;
			core.IsAnyNumber(s2).should.be.false;
		});
		
		it("should return true for number primitive", () => {
			let n: number = 5.5;
			core.IsAnyNumber(n).should.be.true;
		});
		
		it("should return true for number object", () => {
			let n: Number = 5.7;
			core.IsAnyNumber(n).should.be.true;
		});
		
		it("should return true for infinite number primitive", () => {
			let n: number = 5 / 0;
			core.IsAnyNumber(n).should.be.true;
		});
		
		it("should return true for infinite number object", () => {
			let n: Number = 5 / 0;
			core.IsAnyNumber(n).should.be.true;
		});
		
	});
	
	describe("IsNumber", () => {
		it("should return false for null", () => {
			core.IsNumber(null, false).should.be.false;
		});
		
		it("should return false for undefined", () => {
			core.IsNumber(undefined, false).should.be.false;
		});
		
		it("should return false for everything else", () => {
			core.IsNumber("", true).should.be.false;
			core.IsNumber("lame", true).should.be.false;
			core.IsNumber(false).should.be.false;
			core.IsNumber([]).should.be.false;
			core.IsNumber({}).should.be.false;
		});
		
		it("should return false for string primitive that cannot become finite numbers", () => {
			
			let s1: string = "infinity";
			let s2: string = "test test";
			core.IsNumber(s1, true).should.be.false;
			core.IsNumber(s2, true).should.be.false;
			
		});
		
		it("should return false for string object that cannot become finite numbers", () => {
			let s1: String = "infinity";
			let s2: String = "test test";
			core.IsNumber(s1, true).should.be.false;
			core.IsNumber(s2, true).should.be.false;
		});
		
		it("should return true for string primitive that can become finite numbers", () => {
			let s1: String = "5.7";
			let s2: String = "6000";
			core.IsNumber(s1, true).should.be.true;
			core.IsNumber(s2, true).should.be.true;
		});
		
		it("should return true for string object that can become finite numbers", () => {
			let s1: String = "7.3305";
			let s2: String = "5768";
			core.IsNumber(s1, true).should.be.true;
			core.IsNumber(s2, true).should.be.true;
		});
		
		it("should return true for number primitive that are finite", () => {
			let n1: number = 500;
			let n2: number = 8895.324 / 39;
			core.IsNumber(n1).should.be.true;
			core.IsNumber(n2).should.be.true;
		});
		
		it("should return true for number object that are finite", () => {
			let n1: Number = 500;
			let n2: Number = 8895.324 / 39;
			core.IsNumber(n1).should.be.true;
			core.IsNumber(n2).should.be.true;
		});
		
		it("should return false for number primitive that are infinite", () => {
			let n1: number = 500 / 0;
			let n2: number = 8895.324 / 39 / 0;
			core.IsNumber(n1).should.be.false;
			core.IsNumber(n2).should.be.false;
		});
		
		it("should return false for number object that are infinite", () => {
			let n1: Number = 500 / 0;
			let n2: Number = 8895.324 / 39 / 0;
			core.IsNumber(n1).should.be.false;
			core.IsNumber(n2).should.be.false;
		});
		
		it("should return false for NaN number primitive", () => {
			// noinspection UnnecessaryLocalVariableJS
			let n: number = NaN;
			core.IsNumber(n).should.be.false;
		});
		
		it("should return false for NaN number object", () => {
			let n: Number = NaN;
			core.IsNumber(n).should.be.false;
		});
	});
	
	describe("IsArray", () => {
		it("should return true if target is array", () => {
			core.IsArray([1, 2, 3]).should.be.true;
			core.IsArray([[1, 2, 3], [4, 5, 6]]).should.be.true;
			core.IsArray([]).should.be.true;
		});
		
		it("should return false if target is not an array", () => {
			core.IsArray({a: [1, 2, 3]}).should.be.false;
			core.IsArray("[1,2,3]").should.be.false;
			core.IsArray("array").should.be.false;
			core.IsArray(123).should.be.false;
		});
	});
	
	describe("IsNumberArray", () => {
		
		it("should return true for pure number array", () => {
			core.IsNumberArray([5, 6, 7, 2, 5]).should.be.true;
		});
		
		it("should return false for impure number array", () => {
			core.IsNumberArray([5, 6, 7, false, 5353, 3]).should.be.false;
		});
		
		it("should return false for impure number array", () => {
			core.IsNumberArray([5, 6, 7, false, 5353, 3]).should.be.false;
		});
		
		it("should return false for other arrays", () => {
			core.IsNumberArray([false, false, true, true]).should.be.false;
			core.IsNumberArray([[2], [1], [1]]).should.be.false;
			core.IsNumberArray(["1", "2", "3"]).should.be.false;
			core.IsNumberArray([{}, {}, {}]).should.be.false;
		});
		
	});
	
	describe("IsStringArray", () => {
		
		it("should return true for pure string array", () => {
			core.IsStringArray([':D', '~ ~ ~!', 'kirin', ' 2', 'test']).should.be.true;
		});
		
		it("should return false for impure string array", () => {
			core.IsStringArray(['5', '6', 7, 'false', '5353', 'asd']).should.be.false;
		});
		
		it("should return false for other arrays", () => {
			core.IsStringArray([false, false, true, true]).should.be.false;
			core.IsStringArray([[2], [1], [1]]).should.be.false;
			core.IsStringArray([1, 2, 3]).should.be.false;
			core.IsStringArray([{}, {}, {}]).should.be.false;
		});
		
	});
	
	describe("IsBooleanArray", () => {
		
		it("should return true for pure boolean array", () => {
			core.IsBooleanArray([true, false, false, true]).should.be.true;
		});
		
		it("should return false for impure string array", () => {
			core.IsBooleanArray([false, false, true, 'false', '5353', true]).should.be.false;
		});
		
		it("should return false for other arrays", () => {
			core.IsBooleanArray(["1", "2", "3"]).should.be.false;
			core.IsBooleanArray([[2], [1], [1]]).should.be.false;
			core.IsBooleanArray([1, 2, 3]).should.be.false;
			core.IsBooleanArray([{}, {}, {}]).should.be.false;
		});
		
	});
	
	describe("WrapArray", () => {
		it("should wrap the type in array if its not an array", () => {
			core.WrapArray("abc").should.deep.equal(["abc"]);
		});
		it("should return the array if it is already an array", () => {
			core.WrapArray(["abc"]).should.deep.equal(["abc"]);
			core.WrapArray(["a", "b"]).should.deep.equal(["a", "b"]);
		});
	});
	
	describe("random", () => {
		it("should generate random string of fix length", () => {
			for (let i = 0; i < 1000; i++) {
				core.Random(10).length.should.equal(10);
			}
		});
	});
	
	describe("FlattenObject", () => {
		it("should Flatten the object into dot notation", () => {
			let expected: Map<string, number[]> = new Map([
				["a.b", [2, 3]],
				["a.c", [3, 4]],
				["a.d.one", [1, 2, 3]],
				["a.d.two", [3, 4, 5]],
				["b", [-1, -2]]
			]);
			let testSubj: object = {
				a: {
					b: [2, 3],
					c: [3, 4],
					d: {
						one: [1, 2, 3],
						two: [3, 4, 5]
					}
				},
				b: [-1, -2]
			};
			core.FlattenObject(testSubj).Arr().should.deep.equal(expected.Arr());
		});
	});
	
});