import {should} from 'chai';
import {Core, Kore, SortType} from "../../src";
import Should = Chai.Should;

let Should: Should = should();

let core: Core = new Kore();
core.ExtendPrimitives();

class Mock {
	a: number;
	b: string;
	
	constructor(a: number, b: string) {
		this.a = a;
		this.b = b;
	}
}

describe("Array", () => {
	// describe("FilterEmptyString", () => {
	//
	// 	it("should remove all empty string from an array", () => {
	// 		//setup
	// 		// noinspection SpellCheckingInspection
	// 		let sArr: string[] = ["abc", "  ", "ca3r", "kirin", "fab ricate", "        ", "~!@# !", "", " 123"];
	// 		// noinspection SpellCheckingInspection
	// 		let expected: string[] = ["abc", "ca3r", "kirin", "fab ricate", "~!@# !", " 123"];
	//
	// 		sArr.FilterEmptyString().should.deep.equal(expected);
	// 	});
	//
	// });
	
	describe("TrimAll", () => {
		it("should trim all strings in the array ", () => {
			
			//setup
			// noinspection SpellCheckingInspection
			let sArr: string[] = [" abc", "k i r i n ", "fab", "~$@#@ ", "    ", " aaa) ", "test", "h onest "];
			
			//test
			// noinspection SpellCheckingInspection
			let expected: string[] = ["abc", "k i r i n", "fab", "~$@#@", "", "aaa)", "test", "h onest"];
			
			sArr.TrimAll().should.deep.equal(expected);
			
		});
	});
	
	describe("Sort", () => {
		
		describe("Ascending", () => {
			
			it("should throw error if no define method was provided and input array is not number array", () => {
				let obj: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
					b: "Coconut",
					a: 12
				}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
				(() => obj.Sort(SortType.Ascending)).should.throw("Please provide scoring strategy");
			});
			
			describe("with number array", () => {
				
				it("should sort them on ascending order", () => {
					let nArr: number[] = [1, 3, 2, 12, 7, 0, -1];
					let expected: number[] = [-1, 0, 1, 2, 3, 7, 12];
					
					nArr.Sort(SortType.Ascending).should.deep.equal(expected);
				});
				
			});
			describe("with object array", () => {
				
				it("should sort them on ascending order", () => {
					let nArr: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
						b: "Coconut",
						a: 12
					}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
					let expected: Mock[] =
						[{b: "Pear", a: -1}
							, {b: "orange", a: 0}
							, {b: "apple", a: 1}
							, {b: "Apple", a: 2}
							, {b: "pear", a: 3}
							, {b: "coconuts", a: 7}
							, {b: "Coconut", a: 12}
						];
					nArr.Sort(SortType.Ascending, (i: Mock) => i.a).should.deep.equal(expected);
				});
				
			});
			
		});
		
		describe("DescendingNumberical", () => {
			
			it("should throw error if no define method was provided and input array is not number array ", () => {
				let obj: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
					b: "Coconut",
					a: 12
				}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
				(() => obj.Sort(SortType.Descending)).should.throw("Please provide scoring strategy");
				
			});
			describe("with number array", () => {
				
				
				it("should sort them on descending order", () => {
					let nArr: number[] = [1, 3, 2, 12, 7, 0, -1];
					let expected: number[] = [12, 7, 3, 2, 1, 0, -1];
					
					nArr.Sort(SortType.Descending).should.deep.equal(expected);
				});
				
			});
			// noinspection SpellCheckingInspection
			describe("with object arry", () => {
				
				it("should sort them on descending order ", () => {
					let nArr: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
						b: "Coconut",
						a: 12
					}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
					let expected: Mock[] =
						[{b: "Coconut", a: 12}
							, {b: "coconuts", a: 7}
							, {b: "pear", a: 3}
							, {b: "Apple", a: 2}
							, {b: "apple", a: 1}
							, {b: "orange", a: 0}
							, {b: "Pear", a: -1}
						];
					
					nArr.Sort(SortType.Descending, (i: Mock) => i.a).should.deep.equal(expected);
				});
				
			});
		});
		
		describe("AtoZ", () => {
			
			
			it("should throw error if no define method was provided and input array is not string array ", () => {
				let obj: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
					b: "Coconut",
					a: 12
				}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
				(() => obj.Sort(SortType.AtoZ)).should.throw("Please provide scoring strategy");
				
			});
			describe("with String array", () => {
				
				it("should sort from A-Z, uppercase before lower and longer strings before shorter strings ", () => {
					//setup
					let sArr: string[] = ["apple", "pear", "Apple", "Coconut", "coconuts", "orange", "Pear"];
					
					//test
					let expect: string[] = ["apple", "Apple", "Coconut", "coconuts", "orange", "pear", "Pear"];
					sArr.Sort(SortType.AtoZ).should.deep.equal(expect);
				});
				
			});
			
			describe("with Non-string arr", () => {
				
				it("should sort from A-Z, uppercase before lower and longer strings before shorter strings", () => {
					
					//setup
					let sArr: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
						b: "Coconut",
						a: 12
					}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
					
					//test
					let expect: Mock[] =
						[{b: "apple", a: 1}
							, {b: "Apple", a: 2}
							, {b: "Coconut", a: 12}
							, {b: "coconuts", a: 7}
							, {b: "orange", a: 0}
							, {b: "pear", a: 3}
							, {b: "Pear", a: -1}
						];
					
					sArr.Sort(SortType.AtoZ, (s: Mock) => s.b).should.deep.equal(expect);
				});
				
			})
		});
		
		describe("ZtoA", () => {
			
			it("should throw error if no define method was provided and input array is not string array ", () => {
				let obj: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
					b: "Coconut",
					a: 12
				}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
				(() => obj.Sort(SortType.ZtoA)).should.throw("Please provide scoring strategy");
				
			});
			describe("with String array", () => {
				
				
				it("should sort from Z-A, uppercase before lower and longer strings before shorter strings ", () => {
					//setup
					let sArr: string[] = ["apple", "pear", "Apple", "Coconut", "coconuts", "orange", "Pear"];
					
					//test
					let expect: string[] = ["Pear", "pear", "orange", "coconuts", "Coconut", "Apple", "apple"];
					
					sArr.Sort(SortType.ZtoA).should.deep.equal(expect);
				});
				
			});
			
			describe("with Non-string arr", () => {
				
				
				it("should sort from Z-A, uppercase before lower and longer strings before shorter strings ", () => {
					//setup
					let sArr: Mock[] = [{b: "apple", a: 1}, {b: "pear", a: 3}, {b: "Apple", a: 2}, {
						b: "Coconut",
						a: 12
					}, {b: "coconuts", a: 7}, {b: "orange", a: 0}, {b: "Pear", a: -1}];
					
					//test
					let expect: Mock[] =
						[{b: "Pear", a: -1}
							, {b: "pear", a: 3}
							, {b: "orange", a: 0}
							, {b: "coconuts", a: 7}
							, {b: "Coconut", a: 12}
							, {b: "Apple", a: 2}
							, {b: "apple", a: 1}
						];
					sArr.Sort(SortType.ZtoA, (s: Mock) => s.b).should.deep.equal(expect);
				});
				
			})
		});
		
	});
	
	describe("Reverse", () => {
		
		it("should reverse array order ", () => {
			
			//setup
			let nArr: number[] = [1, 4, 5, 6];
			let sArr: string[] = ["a", "c", "b", "D"];
			let oArr: Mock[] = [{a: 1, b: "c"}, {a: 3, b: "g"}, {a: 2, b: "c"}];
			
			//test
			let expectedN: number[] = [6, 5, 4, 1];
			let expectedS: string[] = ["D", "b", "c", "a"];
			let expectedO: Mock[] =
				[{a: 2, b: "c"}
					, {a: 3, b: "g"}
					, {a: 1, b: "c"}
				];
			
			
			nArr.Reverse().should.deep.equal(expectedN);
			sArr.Reverse().should.deep.equal(expectedS);
			oArr.Reverse().should.deep.equal(expectedO);
		});
	});
	
	// describe("FilterNil", () => {
	//
	// 	it("should remove all null and undefined elements ", () => {
	//
	// 		let oArr: any[] = ["abc", 5, 7, "12", null, "abd", false, undefined, null, true, true, 7];
	// 		let expected: any[] = ["abc", 5, 7, "12", "abd", false, true, true, 7];
	// 		oArr.FilterNil().should.deep.equal(expected);
	//
	// 	});
	//
	// });
	
	describe("Has", () => {
		
		describe("Strict Equality", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			
			let oArr: Mock[] = [a, b, c];
			
			it("should return true if array contains object with strict equality as input ", () => {
				oArr.Has(a).should.be.true;
				oArr.Has(b).should.be.true;
				oArr.Has(c).should.be.true;
			});
			
			it("should return false if array contains object with value equality as input ", () => {
				oArr.Has(d).should.be.false;
			});
			
			it("should return false if array contains strict or value equality as input ", () => {
				oArr.Has(e).should.be.false;
			});
		});
		
		describe("Deep Equality", () => {
			let oArr: Mock[] = [{a: 1, b: "c"}, {a: 3, b: "g"}, {a: 2, b: "c"}];
			it("should return true if the array contains object with value equality as input", () => {
				oArr.Has({a: 2, b: "c"}, true).should.be.true;
			});
			it("should return false if non of the objects in the array has equal value with the input", () => {
				oArr.Has({a: 2, b: "d"}, true).should.be.false;
			});
		});
		
	});
	
	describe("Where", () => {
		
		it("should filter the array base on predicate", () => {
			
			let a = [3, 5, 6, 7, 8, 9, 12, -3];
			let expected = [6, 8, 12];
			a.Where((x: number) => x % 2 === 0).should.deep.equal(expected);
			
		});
		
	});
	
	describe("Map", () => {
		
		it("should apply function to each element of array ", () => {
			let a = ["3", "7", "12", "7.3", "66"];
			let expected = [3, 7, 12, 7.3, 66];
			a.Map((x: string) => parseFloat(x)).should.deep.equal(expected);
		});
	});
	
	describe("Map", () => {
		
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		
		let oArr: Mock[] = [a, b, c];
		
		let a1 = new Mock(1, "c");
		let b1 = new Mock(1, "kirin ");
		let c1 = new Mock(1, "kirin");
		
		let expected: Mock[] = [a1, b1, c1];
		
		it("should apply function to each element of array ", () => {
			oArr.Each((e: Mock) => e.a = 1).should.deep.equal(expected);
		});
	});
	
	describe("RemoveValue", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			
			let oArr: Mock[] = [a, b, c];
			
			it("should return array with value strictly equal to the input value ", () => {
				oArr.RemoveValue(a).should.deep.equal([b, c]);
			});
			
			it("should return original array if input has only value equality with any element of the array ", () => {
				oArr.RemoveValue(d).should.deep.equal([a, b, c]);
			});
			
			it("should return original array if input does not contain input value ", () => {
				oArr.RemoveValue(e).should.deep.equal([a, b, c]);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			
			let oArr: Mock[] = [a, b, c];
			
			it("should return array with value strictly equal to the input value removed", () => {
				oArr.RemoveValue(a, true).should.deep.equal([b, c]);
			});
			
			it("should return array with value equality to the input value removed", () => {
				oArr.RemoveValue(d, true).should.deep.equal([a, b]);
			});
			
			it("should return original array if input does not contain input value", () => {
				oArr.RemoveValue(e, true).should.deep.equal([a, b, c]);
			});
		});
		
	});
	
	describe("Without", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			
			let oArr: Mock[] = [a, b, c, e];
			
			it("should remove the value that has strict equality with the target array ", () => {
				oArr.Without([a, c]).should.deep.equal([b, e]);
			});
			
			it("should not remove the value that has value equality with the target array ", () => {
				oArr.Without([a, d]).should.deep.equal([b, c, e]);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			
			let oArr: Mock[] = [a, b, c, e];
			
			it("should remove the value that has strict equality with the target array", () => {
				oArr.Without([a, c], true).should.deep.equal([b, e]);
			});
			
			it("should remove the value that has value equality with the target array", () => {
				oArr.Without([a, d], true).should.deep.equal([b, e]);
			});
		});
		
	});
	
	describe("WithoutIndex", () => {
		
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		
		let oArr: Mock[] = [a, b, c, e];
		
		it("should remove the elements with the given index ", () => {
			oArr.WithoutIndex([1, 3]).should.deep.equal([a, c]);
		});
		
	});
	
	describe("Fill", () => {
		
		it("should fill the array with relevant values ", () => {
			[].Fill(5, i => i + 1).should.deep.equal([1, 2, 3, 4, 5]);
			[].Fill(5, i => i - 1).should.deep.equal([-1, 0, 1, 2, 3]);
		});
		
	});
	
	describe("RemoveIndex", () => {
		
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		
		let oArr: Mock[] = [a, b, c, e];
		
		it("should remove index from input argument", () => {
			oArr.RemoveIndex(2).should.deep.equal([a, b, e]);
		});
	});
	
	describe("Take", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should take the first x elements and make it a new array ", () => {
			oArr.Take(3).should.deep.equal([a, b, c]);
			[5, 4, 3, 9, 2, 4, 6].Take(2).should.deep.equal([5, 4]);
		});
		
		it("should return first element of the array", () => {
			oArr.Take()!.should.equal(a);
		});
		
		it("should return null if array is empty and val is not provided", () => {
			Should.not.exist([].Take());
		});
		
	});
	
	describe("TakeWhile", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should take the each element until the predicate fails (from the start)", () => {
			oArr.TakeWhile((e: Mock) => e.a < 13).should.deep.equal([a, b]);
			[5, 4, 3, 9, 2, 4, 6].TakeWhile((n: number) => n < 6).should.deep.equal([5, 4, 3]);
		});
	});
	
	describe("Take last", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should take the last x elements and make it a new array", () => {
			oArr.Last(3).should.deep.equal([d, e, f]);
			[5, 4, 3, 9, 2, 4, 6].Last(2).should.deep.equal([4, 6]);
		});
		
		it("should return last element of the array", () => {
			oArr.Last()!.should.equal(f);
		});
		
		it("should return null if array is empty and val is not provided", () => {
			Should.not.exist([].Last());
		});
		
	});
	
	describe("Take Last While", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should take the each element until the predicate fails (from the back)", () => {
			oArr.LastWhile((e: Mock) => e.b != "kirin").should.deep.equal([e, f]);
			[5, 4, 3, 9, 2, 4, 6].LastWhile((n: number) => n % 2 === 0).should.deep.equal([2, 4, 6]);
		});
	});
	
	describe("Skip", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should skip the first amount of element, and return the remaining as an array", () => {
			oArr.Skip(4).should.deep.equal([e, f]);
			[1, 2, 3, 4, 5, 6, 7, 9].Skip(3).should.deep.equal([4, 5, 6, 7, 9]);
		});
	});
	
	describe("Skip While", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should skip the while the element the predicate is true", () => {
			oArr.SkipWhile((n: Mock) => n.a !== 14).should.deep.equal([e, f]);
			[1, 2, 3, 4, 5, 6, 7, 9].SkipWhile((n: number) => n !== 4).should.deep.equal([4, 5, 6, 7, 9]);
		});
	});
	
	describe("Omit", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should cut away x amount of elements from the end of the array ", () => {
			oArr.Omit(4).should.deep.equal([a, b]);
			[1, 2, 3, 4, 5, 6, 7, 9].Omit(3).should.deep.equal([1, 2, 3, 4, 5]);
		});
		
		it("should return empty array if everything is cut away", () => {
			[1, 2, 3].Omit(4).should.deep.equal([]);
			
		});
	});
	
	describe("Omit While", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let f = new Mock(-3, "~~");
		let oArr: Mock[] = [a, b, c, d, e, f];
		
		it("should cut away the end of the array until the element does not fulfill the predicate ", () => {
			oArr.OmitWhile((e: Mock) => e.a !== 12).should.deep.equal([a, b]);
			[1, 2, 3, 4, 5, 6, 7, 9].OmitWhile((n: number) => n > 5).should.deep.equal([1, 2, 3, 4, 5]);
		});
	});
	
	describe("FirstIndexOf", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, f, d];
			
			it("should return the first index that has strict equality to search target ", () => {
				oArr.FirstIndexOf(a)!.should.equal(0);
				oArr.FirstIndexOf(d)!.should.equal(4);
				oArr.FirstIndexOf(c)!.should.equal(2);
				[1, 5, 6, 6, 6, 5].FirstIndexOf(5)!.should.equal(1);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, f, d];
			
			it("should return the first index that has value equality to search target", () => {
				oArr.FirstIndexOf(a, true)!.should.equal(0);
				oArr.FirstIndexOf(d, true)!.should.equal(2);
				oArr.FirstIndexOf(c, true)!.should.equal(2);
				[1, 5, 6, 6, 6, 5].FirstIndexOf(5, true)!.should.equal(1);
			});
		});
		
	});
	
	describe("Count", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d];
			
			it("should return the number of element that has strict equality to search target", () => {
				oArr.Count(d).should.equal(2);
				oArr.Count(c).should.equal(3);
				oArr.Count(f).should.equal(0);
				oArr.Count(a).should.equal(1);
				[1, 5, 6, 6, 6, 5].Count(5).should.equal(2);
				[1, 5, 6, 6, 6, 5].Count(6).should.equal(3);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d];
			
			it("should return the number of elements that has value equality to search target", () => {
				oArr.Count(d, true).should.equal(5);
				oArr.Count(c, true).should.equal(5);
				oArr.Count(f, true).should.equal(0);
				oArr.Count(a, true).should.equal(1);
				[1, 5, 6, 6, 6, 5].Count(5, true).should.equal(2);
				[1, 5, 6, 6, 6, 5].Count(6, true).should.equal(3);
			});
		});
		
	});
	
	describe("Indexes", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d];
			
			it("should return an array of indexes that has strict equality to search target ", () => {
				oArr.Indexes(d).should.deep.equal([4, 7]);
				oArr.Indexes(c).should.deep.equal([2, 3, 6]);
				oArr.Indexes(f).should.deep.equal([]);
				oArr.Indexes(a).should.deep.equal([0]);
				[1, 5, 6, 6, 6, 5].Indexes(5).should.deep.equal([1, 5]);
				[1, 5, 6, 6, 6, 5].Indexes(6).should.deep.equal([2, 3, 4]);
			});
		});
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d];
			
			it("should return an array of indexes that has value equality to search target", () => {
				oArr.Indexes(d, true).should.deep.equal([2, 3, 4, 6, 7]);
				oArr.Indexes(c, true).should.deep.equal([2, 3, 4, 6, 7]);
				oArr.Indexes(f, true).should.deep.equal([]);
				oArr.Indexes(a, true).should.deep.equal([0]);
				[1, 5, 6, 6, 6, 5].Indexes(5, true).should.deep.equal([1, 5]);
				[1, 5, 6, 6, 6, 5].Indexes(6, true).should.deep.equal([2, 3, 4]);
			});
		});
		
		
	});
	
	describe("Unique", () => {
		
		describe("strict check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d];
			
			it("should remove duplicate objects that have same pointer (strict equality) ", () => {
				console.log([a, b].FirstIndexOf(a));
				oArr.Unique().should.deep.equal([a, b, c, d, e]);
				[5, 5, 5, 5, 3, 3].Unique().should.deep.equal([5, 3]);
			});
		});
		
		describe("deep check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
			
			it("should remove duplicate objects that have same value(deep equality)", () => {
				oArr.Unique(true).should.deep.equal([a, b, c, e]);
				[5, 5, 5, 5, 3, 3].Unique(true).should.deep.equal([5, 3]);
			});
		});
		
	});
	
	describe("Union", () => {
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let lArr: Mock[] = [a, b, c, c, d];
			let rArr: Mock[] = [c, d, a, e, c];
			
			it("should merge into a unique array ", () => {
				lArr.Union(rArr).should.has.members([a, b, c, d, e]);
				[1, 5, 6, 7].Union([5, 7, 9]).should.has.members([1, 5, 6, 7, 9]);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let lArr: Mock[] = [a, b, c, d];
			let rArr: Mock[] = [c, d, a, e];
			
			it("should merge into a unique array ", () => {
				
				
				lArr.Union(rArr, true).should.has.members([a, b, c, e]);
				[1, 5, 6, 7].Union([5, 7, 9], true).should.has.members([1, 5, 6, 7, 9]);
			});
		});
		
	});
	
	describe("Intersect", () => {
		
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let lArr: Mock[] = [a, b, c, d];
			let rArr: Mock[] = [c, d, a, e];
			
			it("returns an array of element that both side has ", () => {
				lArr.Intersect(rArr).should.has.members([a, c, d]);
				[1, 5, 6, 7].Intersect([5, 7, 9]).should.has.members([5, 7]);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let lArr: Mock[] = [a, b, c, d];
			let rArr: Mock[] = [c, d, a, e];
			
			it("returns an array of element that both side has", () => {
				lArr.Intersect(rArr, true).should.has.members([a, c]);
				[1, 5, 6, 7].Intersect([5, 7, 9], true).should.has.members([5, 7]);
			});
		});
		
		
	});
	
	describe("Outer", () => {
		
		describe("Strict Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let lArr: Mock[] = [a, b, c, d];
			let rArr: Mock[] = [c, d, a, e];
			
			it("returns unique values of each element together ", () => {
				lArr.Outer(rArr).should.has.members([b, e]);
				[1, 5, 6, 7].Outer([5, 7, 9]).should.has.members([1, 6, 9]);
			});
		});
		
		describe("Deep Check", () => {
			let a = new Mock(5, "c");
			let b = new Mock(12, "kirin ");
			let c = new Mock(13, "kirin");
			let d = new Mock(13, "kirin");
			let e = new Mock(14, "z");
			let f = new Mock(-3, "~~");
			let lArr: Mock[] = [a, b, c, d];
			let rArr: Mock[] = [a, d, e, f];
			
			it("returns unique values of each element together", () => {
				lArr.Outer(rArr, true).should.has.members([b, e, f]);
				[1, 5, 6, 7].Outer([5, 7, 9], true).should.has.members([1, 6, 9]);
			});
		});
		
	});
	
	describe("Max", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return the element with highest score with strategy provided", () => {
			oArr.Max((s: Mock) => s.a).should.equal(e);
			
		});
		
		it("should return element with highest number if no strategy is provided and element is an array", () => {
			[4, 5, 6, 7, 2, 3].Max().should.equal(7);
		});
		
		it("should throw error if array empty", () => {
			(() => [].Max()).should.throw("Empty Array");
		});
		
	});
	
	describe("Min", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return the element with highest score with strategy provided", () => {
			oArr.Min((s: Mock) => s.a).should.equal(a);
			
		});
		
		it("should return element with highest number if no strategy is provided and element is an array", () => {
			[4, 5, 6, 7, 2, 3].Min().should.equal(2);
		});
		
		it("should throw error if array empty", () => {
			(() => [].Min()).should.throw("Empty Array");
		});
	});
	
	describe("Sum", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return sum with strategy provided", () => {
			oArr.Sum((s: Mock) => s.a).should.equal(110);
		});
		
		it("should return element with highest number if no strategy is provided and element is an array", () => {
			[4, 5, 6, 7, 2, 3].Sum().should.equal(27);
		});
		
		it("should throw error if array empty", () => {
			(() => [].Sum()).should.throw("Empty Array");
		});
		
	});
	
	describe("Reduce", () => {
		it("should reduce the array base on the function", () => {
			[5, 12, 13, 13, 14].Reduce((a: number, b: number) => a * b).should.equal(141960);
		});
	});
	
	describe("Find", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return the first element that matches the predicate", () => {
			oArr.Find((s: Mock) => s.a === 13)!.should.equal(c);
			oArr.Find((s: Mock) => s === a)!.should.equal(a);
			[4, 5, 6, 7, 2, 3].Find((n: number) => n % 2 === 1)!.should.equal(5);
		});
		
		it("should return null if the element cannot be found", () => {
			([2, 3, 4, 5, 6].Find((n: number) => n < 2) === null).should.be.true;
		});
	});
	
	describe("FindIndex", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return the first element to match the predicate", () => {
			oArr.FindIndex((s: Mock) => s.a === 13)!.should.equal(2);
			oArr.FindIndex((s: Mock) => s === a)!.should.equal(0);
			[4, 5, 6, 7, 2, 3].FindIndex((n: number) => n % 2 === 1)!.should.equal(1);
		});
		
		it("should return null if the element cannot be found", () => {
			([2, 3, 4, 5, 6].FindIndex((n: number) => n < 2) === null).should.be.true;
		});
	});
	
	describe("Any", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return true if one or more element fulfils the predicate", () => {
			oArr.Any((s: Mock) => s.a > 10).should.be.true;
		});
		it("should return false if none of the element fulfil the predicate", () => {
			oArr.Any((s: Mock) => s.a < 4).should.be.false;
		});
		
	});
	
	describe("All", () => {
		let a = new Mock(5, "c");
		let b = new Mock(12, "kirin ");
		let c = new Mock(13, "kirin");
		let d = new Mock(13, "kirin");
		let e = new Mock(14, "z");
		let oArr: Mock[] = [a, b, c, c, d, e, c, d, e];
		
		it("should return true if all the element fulfill the predicate", () => {
			oArr.All((s: Mock) => s.a > 3).should.be.true;
		});
		it("should return false if one of the element fails the predicate", () => {
			oArr.All((s: Mock) => s.a > 10).should.be.false;
		});
	});
	
	describe("Merge", () => {
		
		it("should throw exception if the two array don't have the same size  method", () => {
			(() => [1, 2, 3].Merge([6, 7, 8, 9])).should.throw("Array has to be same length");
		});
		it("should merge the two array as map if they have the same length  method", () => {
			let expected: Map<number, number> = new Map([
				[1, 2],
				[2, 3],
				[3, 4]
			]);
			[1, 2, 3].Merge([2, 3, 4]).should.deep.equal(expected);
		});
	});
	
	describe("AsKey", () => {
		
		it("should generate a map base on the function in place  method", () => {
			let expected: Map<number, number> = new Map([
				[1, 2],
				[2, 3],
				[3, 4]
			]);
			[1, 2, 3].AsKey((i: number) => i + 1).should.deep.equal(expected);
		});
	});
	
	describe("AsValue", () => {
		it("should generate a map base on the function in place  method", () => {
			let expected: Map<number, number> = new Map([
				[2, 1],
				[3, 2],
				[4, 3]
			]);
			[1, 2, 3].AsValue((i: number) => i + 1).should.deep.equal(expected);
		});
	});
	
	describe("Flatten", () => {
		it("should flatten the array", () => {
			
			let expected = [1, 2, 3, 2, 3, 4, 4, 5];
			let before = [[1, 2, 3], [2, 3, 4], [4, 5]];
			before.Flatten().should.deep.equal(expected);
			
		});
	});
	
	describe("Random", () => {
		it("should return null if there's no value in the array", () => {
			([].Random() === null).should.be.true;
		});
		it("should return the only value if there's only 1 value", () => {
			[1].Random()!.should.equal(1);
		});
		it("should return a value that exist in the array", () => {
			for (let i = 0; i < 1000; i++) {
				let rVal: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].Random()!;
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].Has(rVal).should.be.true;
			}
		});
		
	});
	
});