import {should} from 'chai';
import {Core, Kore, SortType} from "../../src";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

class Mock1 {
	a: number;
	b: string;
	
	constructor(a: number, b: string) {
		this.a = a;
		this.b = b;
	}
	
	Repeat(): string {
		return this.b.repeat(this.a);
	}
}

class Mock2 {
	a: number;
	b: string;
	
	constructor(a: number, b: string) {
		this.a = a;
		this.b = b;
	}
	
	Repeat(): string {
		return this.b.repeat(this.a);
	}
}

describe("Map", () => {
	
	let m0 = new Mock1(0, "Pineapple");
	
	let m1 = new Mock1(5, "apple");
	let m2 = new Mock1(12, "pear");
	let m3 = new Mock1(-7, "coconuts");
	let m4 = new Mock1(200, "Coconut");
	let m5 = new Mock1(-70, "oranges");
	
	let m6 = new Mock1(77, "Orange");
	let m7 = new Mock1(55, "Durian");
	let m8 = new Mock1(0, "Apple");
	let m9 = new Mock1(0, "Apple");
	
	let n0 = new Mock2(5, "apple");
	let n1 = new Mock2(5, "apple"); //1
	let n2 = new Mock2(12, "pear"); //2
	let n3 = new Mock2(-7, "coconuts"); //6
	let n4 = new Mock2(200, "Coconut"); //4
	let n5 = new Mock2(-70, "oranges"); //3
	let n6 = new Mock2(77, "Orange");
	let n7 = new Mock2(55, "Durian");
	let n8 = new Mock2(0, "Apple");
	let n9 = new Mock2(0, "Apple"); //5
	
	let map1: Map<string, any> = new Map([
		["first", "kirin"],
		["second", " "],
		["third", " ~ "],
		["fourth", "kirin"],
		["fifth", "testing element"],
		["ud", undefined],
		["null", null]
	]);
	
	let map12: Map<string, string> = new Map([
		["firsts", "kirin"],
		["third", " ~ "],
		["abc", " wtf"],
		["fourths", " kirin"],
		["fifths", "testing element"],
		["fifth2", " "],
		["kiri", ""]
	]);
	
	let map2: Map<string, number> = new Map([
		["apples", -1],
		["orange", 10],
		["Apple", 5],
		["pear", 2],
		["apple", 1]
	]);
	
	let map22: Map<Mock1, number> = new Map([
		[m1, -1],
		[m2, 10],
		[m3, 5],
		[m4, 2],
		[m5, 1]
	]);
	
	let map23: Map<number, number> = new Map([
		[0, 1],
		[-5, 7],
		[-4, 12],
		[10, 7.77],
		[9.3, 0],
		[7000, -5]
	]);
	let map4: Map<string, Mock2> = new Map([
		["orange", n1], //5, -8 -3
		["pear", n2], //4 -6 -2
		["apple", n5], //5 - 8 -3
		["Pear", n4], //4 -6 -2
		["Coco", n9], //4 -6 -2
		["coconut", n3] //7 -12 -5
	]);
	
	let map42: Map<Mock2, string> = new Map([
		[n1, "orange"],
		[n2, "pear"],
		[n5, "apple"],
		[n6, "Pear"],
		[n3, "Coco"],
		[n4, "coconut"]
	]);
	
	let map5: Map<Mock2, Mock1> = new Map([
		[n3, m2],
		[n4, m5],
		[n7, n3],
		[n6, m9],
		[n0, m1],
		[n5, m8]
	]);
	
	let map6: Map<Mock2, Mock1> = new Map([
		[n0, m1],
		[n1, m2],
		[n2, m3],
		[n4, m5],
		[n5, m6],
		[n6, m7],
		[n7, m4],
		[n9, m9]
	
	]);
	
	describe("Map", () => {
		let f0 = new Mock1(0, "Pineapple");
		let f1 = new Mock1(5, "apple");
		let f2 = new Mock1(12, "pear");
		let e0 = new Mock1(1, "Pineapple");
		let e1 = new Mock1(6, "apple");
		let e2 = new Mock1(13, "pear");
		let testMap: Map<Mock1, number> = new Map<Mock1, number>([
			[f0, 1],
			[f1, 2],
			[f2, 3]
		]);
		
		let expected: Map<Mock1, number> = new Map<Mock1, number>([
			[e0, 1],
			[e1, 2],
			[e2, 3]
		]);
		
		it("should apply transformation to each element", () => {
			testMap.Each((k: Mock1) => k.a = k.a + 1).should.deep.equal(expected);
		});
	});
	
	describe("TrimValue", () => {
		it("should return map with all the value trimmed", () => {
			let expected: Map<string, string> = new Map([
				["firsts", "kirin"],
				["third", "~"],
				["abc", "wtf"],
				["fourths", "kirin"],
				["fifths", "testing element"],
				["fifth2", ""],
				["kiri", ""]
			]);
			map12.TrimValue().should.deep.equal(expected);
		});
	});
	
	describe("SortByKey", () => {
		describe("A-Z", () => {
			
			it("should sort key from A-Z if key is string", () => {
				
				let expected: Map<string, number> = new Map([
					["apple", 1],
					["Apple", 5],
					["apples", -1],
					["orange", 10],
					["pear", 2]
				]);
				map2.SortByKey(SortType.AtoZ).Arr().should.deep.equal(expected.Arr());
			});
			
			it("should use function to get string value from object key and sort from A-Z", () => {
				let expected: Map<Mock1, number> = new Map([
					[m1, -1],
					[m4, 2],
					[m3, 5],
					[m5, 1],
					[m2, 10]
				]);
				
				map22.SortByKey(SortType.AtoZ, (e: Mock1) => e.b).Arr().should.deep.equal(expected.Arr());
			});
			
			
		});
		
		describe("Z-A", () => {
			it("should sort key from Z-A if key is string", () => {
				let expected: Map<string, number> = new Map([
					["pear", 2],
					["orange", 10],
					["apples", -1],
					["Apple", 5],
					["apple", 1]
				]);
				map2.SortByKey(SortType.ZtoA).Arr().should.deep.equal(expected.Arr());
			});
			
			it("should use function to get string value from object key and sort from Z-A", () => {
				let expected: Map<Mock1, number> = new Map([
					[m2, 10],
					[m5, 1],
					[m3, 5],
					[m4, 2],
					[m1, -1]
				]);
				
				map22.SortByKey(SortType.ZtoA, (e: Mock1) => e.b).Arr().should.deep.equal(expected.Arr());
				
			});
			
			
		});
		
		describe("NumericalAscending", () => {
			it("should sort key in ascending order if key is number", () => {
				let expected: Map<number, number> = new Map([
					[-5, 7],
					[-4, 12],
					[0, 1],
					[9.3, 0],
					[10, 7.77],
					[7000, -5]
				]);
				
				map23.SortByKey(SortType.Ascending).Arr().should.deep.equal(expected.Arr());
			});
			
			it("should use function to get number value from key object and sort in ascending order if key is not number", () => {
				let expected: Map<Mock1, number> = new Map([
					[m5, 1],
					[m3, 5],
					[m1, -1],
					[m2, 10],
					[m4, 2]
				]);
				map22.SortByKey(SortType.Ascending, (e: Mock1) => e.a).Arr().should.deep.equal(expected.Arr());
			});
			
		});
		
		describe("NumbericalDescending", () => {
			it("should sort key in descending order if key is number", () => {
				let expected: Map<number, number> = new Map([
					[7000, -5],
					[10, 7.77],
					[9.3, 0],
					[0, 1],
					[-4, 12],
					[-5, 7]
				]);
				
				map23.SortByKey(SortType.Descending).Arr().should.deep.equal(expected.Arr());
				
			});
			
			it("should use function to get number value from key object and sort in descending order if key is not number", () => {
				let expected: Map<Mock1, number> = new Map([
					[m4, 2],
					[m2, 10],
					[m1, -1],
					[m3, 5],
					[m5, 1]
				]);
				map22.SortByKey(SortType.Descending, (e: Mock1) => e.a).Arr().should.deep.equal(expected.Arr());
				
			});
		});
		
	});
	
	describe("SortByValue", () => {
		describe("A-Z", () => {
			
			it("should sort value from A-Z if key is string", () => {
				let expected = new Map<Mock2, string>([
					[n5, "apple"],
					[n3, "Coco"],
					[n4, "coconut"],
					[n1, "orange"],
					[n2, "pear"],
					[n6, "Pear"]
				]);
				
				map42.SortByValue(SortType.AtoZ).Arr().should.deep.equal(expected.Arr());
			});
			
			it("should use function to get string value from object value and sort from A-Z", () => {
				let expected = new Map([
					["orange", n1],
					["Coco", n9],
					["Pear", n4],
					["coconut", n3],
					["apple", n5],
					["pear", n2]
				
				]);
				let actual = map4.SortByValue(SortType.AtoZ, (s: Mock2) => s.b);
				actual.Arr().should.deep.equal(expected.Arr());
			});
			
		});
		
		describe("Z-A", () => {
			it("should sort value from Z-A if key is string", () => {
				let expected = new Map<Mock2, string>([
					[n6, "Pear"],
					[n2, "pear"],
					[n1, "orange"],
					[n4, "coconut"],
					[n3, "Coco"],
					[n5, "apple"]
				]);
				map42.SortByValue(SortType.ZtoA).Arr().should.deep.equal(expected.Arr());
				
			});
			
			it("should use function to get string value from object value and sort from Z-A", () => {
				let expected = new Map([
					["pear", n2],
					["apple", n5],
					["coconut", n3],
					["Pear", n4],
					["Coco", n9],
					["orange", n1]
				
				]);
				map4.SortByValue(SortType.ZtoA, (s: Mock2) => s.b).Arr().should.deep.equal(expected.Arr());
				
			});
			
		});
		
		describe("NumericalAscending", () => {
			it("should sort key in ascending order if value is number", () => {
				let expected = new Map([
					["apples", -1],
					["apple", 1],
					["pear", 2],
					["Apple", 5],
					["orange", 10]
				]);
				map2.SortByValue(SortType.Ascending).Arr().should.be.deep.equal(expected.Arr());
				
			});
			
			it("should use function to get number value from value object and sort in ascending order if value is not number", () => {
				let expected = new Map<string, Mock2>([
					["apple", n5],
					["coconut", n3],
					["Coco", n9],
					["orange", n1],
					["pear", n2],
					["Pear", n4]
				]);
				
				map4.SortByValue(SortType.Ascending, (e: Mock2) => e.a).Arr().should.be.deep.equal(expected.Arr());
			});
			
		});
		
		describe("NumbericalDescending", () => {
			it("should sort value in descending order if value is number", () => {
				let expected = new Map([
					["orange", 10],
					["Apple", 5],
					["pear", 2],
					["apple", 1],
					["apples", -1]
				
				]);
				map2.SortByValue(SortType.Descending).Arr().should.be.deep.equal(expected.Arr());
				
				
			});
			
			it("should use function to get number value from value object and sort in descending order if value is not number", () => {
				let expected = new Map<string, Mock2>([
					["Pear", n4],
					["pear", n2],
					["orange", n1],
					["Coco", n9],
					["coconut", n3],
					["apple", n5]
				]);
				
				map4.SortByValue(SortType.Descending, (e: Mock2) => e.a).Arr().should.be.deep.equal(expected.Arr());
				
			});
		});
		
	});
	
	describe("Reverse", () => {
		it("should reverse the order of the map", () => {
			let expected = new Map<Mock2, Mock1>([
				[n5, m8],
				[n0, m1],
				[n6, m9],
				[n7, n3],
				[n4, m5],
				[n3, m2]
			]);
			
			map5.Reverse().should.deep.equal(expected);
		});
	});
	
	describe("HasKey", () => {
		describe("Strict Check", () => {
			it("should return true if map contains key that has strict equality with the search target", () => {
				map6.HasKey(n0).should.be.true;
				map6.HasKey(n9).should.be.true;
				map6.HasKey(n4).should.be.true;
			});
			it("should return false if map contains key that has value equality with the search target", () => {
				map6.HasKey(n8).should.be.false;
			});
			
			it("should return false if map does not contain key from the search target", () => {
				map6.HasKey(n3).should.be.false;
			});
		});
		
		describe("Deep Check", () => {
			it("should return true if map contains key that has strict equality with the search target", () => {
				map6.HasKey(n0, true).should.be.true;
				map6.HasKey(n9, true).should.be.true;
				map6.HasKey(n4, true).should.be.true;
			});
			it("should return true if map contains key that has value equality with the search target", () => {
				map6.HasKey(n8, true).should.be.true;
			});
			
			it("should return false if map does not contain key from the search target", () => {
				map6.HasKey(n3, true).should.be.false;
			});
		});
		
	});
	
	describe("HasValue", () => {
		
		describe("Strict Check", () => {
			
			it("should return true if map contains value that has strict equality with the search target", () => {
				map6.HasValue(m1).should.be.true;
				map6.HasValue(m2).should.be.true;
				map6.HasValue(m3).should.be.true;
			});
			it("should return false if map contains value that has value equality with the search target", () => {
				map6.HasValue(m8).should.be.false;
			});
			
			it("should return false if map does not contain value from the search target", () => {
				map6.HasValue(m0).should.be.false;
			});
		});
		
		describe("Deep Check", () => {
			it("should return true if map contains value that has strict equality with the search target", () => {
				map6.HasValue(m1, true).should.be.true;
				map6.HasValue(m2, true).should.be.true;
				map6.HasValue(m3, true).should.be.true;
			});
			it("should return true if map contains value that has value equality with the search target", () => {
				map6.HasValue(m8, true).should.be.true;
			});
			
			it("should return false if map does not contain value from the search target", () => {
				map6.HasValue(m0, true).should.be.false;
			});
		});
		
	});
	
	describe("Where", () => {
		it("should filter the map base on the predicate", () => {
			
			let expected = new Map<Mock1, number>([
				[m2, 10],
				[m4, 2]
			]);
			
			map22.Where((k: Mock1, v: number) => (v % 2) === 0).should.deep.equal(expected);
		});
	});
	
	describe("MapKey", () => {
		it("should transform the map base on function on the key", () => {
			let expected = new Map<number, number>([
				[5, -1],
				[12, 10],
				[-7, 5],
				[200, 2],
				[-70, 1]
			]);
			map22.MapKey((k: Mock1) => k.a).should.deep.equal(expected);
		});
	});
	
	describe("MapValue", () => {
		it("should transform the map base on function on the value", () => {
			let expected = new Map<string, string>([
				["orange", "apple"],
				["pear", "pear"],
				["apple", "oranges"],
				["Pear", "Coconut"],
				["Coco", "Apple"],
				["coconut", "coconuts"]
			]);
			
			map4.MapValue((v: Mock2) => v.b).should.deep.equal(expected);
		});
	});
	
	describe("Map", () => {
		it("should transform the map base on function to an array", () => {
			let expected: string[] = [
				"firstskirin",
				"third ~ ",
				"abc wtf",
				"fourths kirin",
				"fifthstesting element",
				"fifth2 ",
				"kiri"
			];
			map12.Map((k: string, v: string) => k + v).should.deep.equal(expected);
		});
	});
	
	describe("RemoveKey", () => {
		describe("Strict Check", () => {
			it("should remove entries whose key value has strict equality with the searcht target", () => {
				let expected = new Map<Mock2, Mock1>([
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				map6.RemoveKey(n0).should.deep.equal(expected);
			});
			
			it("should not remove entries whose key values has value equality with search target", () => {
				let expected = new Map<Mock2, Mock1>([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				map6.RemoveKey(n8).should.deep.equal(expected);
			});
			it("should do nothing if the map doesn't contain the key", () => {
				let expected = new Map<Mock2, Mock1>([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				map6.RemoveKey(n3).should.deep.equal(expected);
			});
		});
		
		describe("Deep Check", () => {
			it("should remove entries whose key value has strict equality with the searcht target", () => {
				let expected = new Map<Mock2, Mock1>([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				
				map6.RemoveKey(n3, true).should.deep.equal(expected);
			});
			
			it("should remove entries whose key values has value equality with search target", () => {
				let expected = new Map<Mock2, Mock1>([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4]
				]);
				map6.RemoveKey(n8, true).should.deep.equal(expected);
			});
			it("should do nothing if the map doesn't contain the key", () => {
				let expected = new Map<Mock2, Mock1>([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				map6.RemoveKey(n3, true).should.deep.equal(expected);
			});
		});
		
		
	});
	
	describe("RemoveValue", () => {
		describe("Strict Check", () => {
			it("should remove entries whose value's value has strict equality with the search target", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				]);
				
				map6.RemoveValue(m3).should.deep.equal(expected);
			});
			
			it("should not remove entries whose value's values has value equality with search target", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				
				]);
				map6.RemoveValue(m8).should.deep.equal(expected);
			});
			it("should do nothing if the map doesn't contain the value", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				
				]);
				map6.RemoveValue(m0).should.deep.equal(expected);
			});
		});
		describe("Deep Check", () => {
			it("should remove entries whose value's value has strict equality with the searcht target", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				
				]);
				
				map6.RemoveValue(m3, true).should.deep.equal(expected);
			});
			
			it("should remove entries whose value's values has value equality with search target", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4]
				
				]);
				map6.RemoveValue(m8, true).should.deep.equal(expected);
			});
			it("should do nothing if the map doesn't contain the value", () => {
				let expected: Map<Mock2, Mock1> = new Map([
					[n0, m1],
					[n1, m2],
					[n2, m3],
					[n4, m5],
					[n5, m6],
					[n6, m7],
					[n7, m4],
					[n9, m9]
				
				]);
				map6.RemoveValue(m0, true).should.deep.equal(expected);
			});
		});
		
	});
	
	describe("Without", () => {
		describe("Strict Check", () => {
			describe("Key", () => {
				it("should return a map without any of the keys with strict equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n4, m5],
						[n5, m6],
						[n7, m4],
						[n9, m9]
					]);
					
					map6.Without([n2, n3, n6], []).should.deep.equal(expected);
					
				});
				it("should return a map with keys with value equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					]);
					
					map6.Without([n0, n8], []).should.deep.equal(expected);
					
				});
				
				it("should do nothing if the map does not contain any of the key in search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					map6.Without([n3, n8], []).should.deep.equal(expected);
				});
			});
			describe("Value", () => {
				it("should return a map without any of the values with strict equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					
					map6.Without([], [m1, m2, m3]).should.deep.equal(expected);
				});
				it("should return a map with values with value equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					
					map6.Without([], [m8, m1]).should.deep.equal(expected);
				});
				
				it("should do nothing if the map does not contain any of the value in search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					
					map6.Without([], [m8, m0]).should.deep.equal(expected);
				});
			});
		});
		describe("Deep Check", () => {
			describe("Key", () => {
				it("should return a map without any of the keys with strict equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n4, m5],
						[n5, m6],
						[n7, m4],
						[n9, m9]
					]);
					
					map6.Without([n2, n3, n6], [], true).should.deep.equal(expected);
				});
				it("should return a map without any of the  keys with value equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4]
					]);
					
					map6.Without([n0, n8], [], true).should.deep.equal(expected);
				});
				
				it("should do nothing if the map does not contain any of the key in search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					map6.Without([n3], [], true).should.deep.equal(expected);
				});
			});
			describe("Value", () => {
				it("should return a map without any of the values with strict equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					
					]);
					
					map6.Without([], [m1, m2, m3], true).should.deep.equal(expected);
				});
				it("should return a map without any of the values with value equality in the search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4]
					
					]);
					
					map6.Without([], [m8, m1], true).should.deep.equal(expected);
				});
				
				it("should do nothing if the map does not contain any of the value in search target array", () => {
					let expected: Map<Mock2, Mock1> = new Map([
						[n0, m1],
						[n1, m2],
						[n2, m3],
						[n4, m5],
						[n5, m6],
						[n6, m7],
						[n7, m4],
						[n9, m9]
					]);
					map6.Without([], [m0], true).should.deep.equal(expected);
				});
			});
		});
		
	});
	
	describe("Take", () => {
		it("should take the first x entries of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n0, m1],
				[n1, m2],
				[n2, m3],
				[n4, m5],
				[n5, m6]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"]
			]);
			
			map6.Take(5).should.deep.equal(expected1);
			map42.Take(3).should.deep.equal(expected2);
		});
		it("should return same map if x is larger than size of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n0, m1],
				[n1, m2],
				[n2, m3],
				[n4, m5],
				[n5, m6],
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"],
				[n6, "Pear"],
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			map6.Take(10).should.deep.equal(expected1);
			map42.Take(6).should.deep.equal(expected2);
		});
		it("should return first entry of the map if no entry value is provided", () => {
			map42.Take()!.should.deep.equal({key: n1, value: "orange"});
		});
		
		it("should return null if map is empty and no value is provided", () => {
			should().not.exist(new Map([]).Take())
		});
		
	});
	
	describe("TakeWhile", () => {
		it("should take the first x entries of the map", () => {
			let expected1: Map<number, number> = new Map([
				[0, 1],
				[-5, 7],
				[-4, 12],
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"]
			]);
			
			map23.TakeWhile((n: number) => n < 1).Arr().should.deep.equal(expected1.Arr());
			map42.TakeWhile((k: Mock2, v: string) => v !== "Pear").should.deep.equal(expected2);
		});
	});
	
	describe("Skip", () => {
		it("should remove the first x enrties of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n4, m5],
				[n5, m6],
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n5, "apple"],
				[n6, "Pear"],
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			map6.Skip(3).should.deep.equal(expected1);
			map42.Skip(2).should.deep.equal(expected2);
		});
		it("should return empty map if x is larger than size of map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([]);
			let expected2: Map<Mock2, string> = new Map([]);
			map6.Skip(10).should.deep.equal(expected1);
			map42.Skip(6).should.deep.equal(expected2);
		});
	});
	
	describe("SkipWhile", () => {
		it("should remove the first x enrties of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n4, m5],
				[n5, m6],
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n5, "apple"],
				[n6, "Pear"],
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			map6.SkipWhile((k: Mock2) => k !== n4).should.deep.equal(expected1);
			map42.SkipWhile((k: Mock2, v: string) => v !== "apple").should.deep.equal(expected2);
		});
	});
	
	describe("Omit", () => {
		it("should remove last x entries of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n0, m1],
				[n1, m2],
				[n2, m3],
				[n4, m5],
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"]
			]);
			
			map6.Omit(4).should.deep.equal(expected1);
			map42.Omit(3).should.deep.equal(expected2);
		});
		
		it("should return emtpy map if x is larger than size of map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([]);
			let expected2: Map<Mock2, string> = new Map([]);
			map6.Omit(11).Arr().should.deep.equal(expected1.Arr());
			map42.Omit(7).Arr().should.deep.equal(expected2.Arr());
		});
	});
	
	describe("OmitWhile", () => {
		it("should remove last x entries of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n0, m1],
				[n1, m2],
				[n2, m3],
				[n4, m5],
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"]
			]);
			
			map6.OmitWhile((k: Mock2) => k !== n4).should.deep.equal(expected1);
			map42.OmitWhile((k: Mock2, v: string) => v !== "apple").should.deep.equal(expected2);
		});
	});
	
	describe("Last", () => {
		it("should return last x entries of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			
			map6.Last(3).should.deep.equal(expected1);
			map42.Last(2).should.deep.equal(expected2);
		});
		it("should return same map if x is larger than size of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n0, m1],
				[n1, m2],
				[n2, m3],
				[n4, m5],
				[n5, m6],
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n1, "orange"],
				[n2, "pear"],
				[n5, "apple"],
				[n6, "Pear"],
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			map6.Last(11).should.deep.equal(expected1);
			map42.Last(7).should.deep.equal(expected2);
		});
		it("should return first entry of the map if no entry value is provided", () => {
			map42.Last()!.should.deep.equal({key: n4, value: "coconut"});
		});
		
		it("should return null if map is empty and no value is provided", () => {
			should().not.exist(new Map([]).Last())
		});
	});
	
	describe("LastWhile", () => {
		it("should return last x entries of the map", () => {
			let expected1: Map<Mock2, Mock1> = new Map([
				[n6, m7],
				[n7, m4],
				[n9, m9]
			]);
			let expected2: Map<Mock2, string> = new Map([
				[n3, "Coco"],
				[n4, "coconut"]
			]);
			
			map6.LastWhile((k: Mock2) => k !== n5).should.deep.equal(expected1);
			map42.LastWhile((k: Mock2, v: string) => v !== "Pear").should.deep.equal(expected2);
		});
	});
	
	describe('Arr', () => {
		it("should convert map into Entry Array", () => {
			let expected: [string, Mock2][] = [
				["apple", n5],
				["Coco", n9],
				["coconut", n3],
				["orange", n1],
				["pear", n2],
				["Pear", n4]
			];
			map4.SortByKey(SortType.AtoZ).Arr().should.deep.equal(expected);
		});
		
		
	});
	
	describe("Keys", () => {
		it("should return array of keys", () => {
			let expected: string[] = [
				"first",
				"second",
				"third",
				"fourth",
				"fifth",
				"ud",
				"null",
			];
			map1.Keys().should.deep.equal(expected);
		});
	});
	
	describe("Values", () => {
		it("should return array of values", () => {
			let expected: number[] = [-1, 10, 5, 2, 1];
			map2.Values().should.deep.equal(expected);
			
		});
	});
	
	describe("Find", () => {
		it("should return the first element that matches predicate", () => {
			
			map4.Find((k: string) => k.length === 4)!.key.should.equal("pear");
		});
		it("should return null if there are no key that matches", () => {
			(map4.Find((k: string) => k.length === 2) === null).should.be.true;
		});
	});
	
	describe("Min", () => {
		it("should return the key that has the lowest score base on strategy", () => {
			map4.Min((k: string) => k.length).key.should.equal("pear");
			map4.Min((k: string, v: Mock2) => v.b.length).value.should.equal(n2);
		});
		
		
		it("should throw error if array is empty", () => {
			(() => new Map<string, string>([]).Min((k: string) => k.length)).should.throw("Empty Array");
		});
	});
	
	describe("Max", () => {
		it("should return the key that has the lowest score base on strategy", () => {
			map4.Max((k: string) => k.length).key.should.equal("coconut");
			map4.Max((k: string, v: Mock2) => v.b.length).value.should.equal(n3);
		});
		
		it("should throw error if array is empty", () => {
			(() => new Map<string, string>([]).Max((k: string) => k.length)).should.throw("Empty Array");
		});
	});
	
	describe("Sum", () => {
		it("should return sum of map score base on strategy", () => {
			map23.Sum((k: number) => k).should.equal(7010.3)
		});
	});
	
	describe("Reduce", () => {
		it("should reduce the Map", () => {
			map23.Reduce((a, b) => {
				return {
					key: a.key + b.key,
					value: a.value + b.value
				}
			}).should.deep.equal({key: 7010.3, value: 22.77});
		});
	});
	
	describe("Any", () => {
		it("should return true if one or more entry fulfils the predicate", () => {
			map4.Any((k: string) => k.length === 4).should.be.true;
			map4.Any((k: string) => k === "Coco").should.be.true;
		});
		
		it("should return false if none of the entries fulfils the predicate", () => {
			map4.Any((k: string) => k.length < 2).should.be.false;
			map4.Any((k: string, v: Mock2) => v === null).should.be.false;
		});
		
	});
	
	describe("All", () => {
		it("should return true if all of the entries fulfils the predicate", () => {
			map4.All((k: string) => k.length > 2).should.be.true;
			map4.All((k: string, v: Mock2) => v !== null).should.be.true;
		});
		
		it("should return false if even one entry fail to fulfil the predicate", () => {
			map4.All((k: string) => k.length < 7).should.be.false;
			map4.All((k: string, v: Mock2) => v.b.length < 7).should.be.false;
		});
	});
	
});