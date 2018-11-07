import {should} from 'chai';
import {Core, Kore} from "../../src";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

describe("String", () => {
	
	describe("Match", () => {
		it("should return an array of string that matches the regular expression", () => {
			"The quick brown fox jumped over the lazy dog. It barked.".Match(/[A-Z]/g).should.deep.equal(["T", "I"]);
			"The quick brown fox jumped over the lazy dog. It barked.".Match(/~/g).should.deep.equal([]);
		});
	});
	
	describe("ReplaceAll", () => {
		it("should replace all occurence of the string base on the regex", () => {
			"aaab,ab,bab".ReplaceAll("ab", "cd").should.equal("aacd,cd,bcd");
			" <wow!> <ithink> <help!>".ReplaceAll("<[^>]*>", '<q>').should.equal(' <q> <q> <q>');
		});
	});
	
	describe("IsEmpty", () => {
		it('should return true if the string equates to ""', () => {
			"".IsEmpty().should.be.true;
		});
		
		it('should return true if string trimmed equares to ""', () => {
			"  ".IsEmpty().should.be.true;
		});
		
		it("should return false for string with proper values", () => {
			" ~ ".IsEmpty().should.be.false;
			"~~~test~~".IsEmpty().should.be.false;
			"           .                       ".IsEmpty().should.be.false;
		});
	});
	
	describe("Starts", function () {
		it("should return true if the first target string starts with the checked string", () => {
			"Elephants are great".Starts("Elephants").should.be.true;
		});
		
		it("should return true if the first few chracter is space, but the next few starting character in the target string is equal to the checked string", () => {
			"    Elephants are great".Starts("Elephants").should.be.true;
			
		});
		
		it("should return false if the the starting of target string does not start with checked string", () => {
			"Panda are great".Starts("Elephants").should.be.false;
		});
		
		it("should throw exception if trimmed starting string is empty", () => {
			"Pandas are great".Starts("  ").should.be.false;
		});
	});
	
	describe("Ends", function () {
		it("should return true if the first target string ends with the checked string", () => {
			"Elephants are great".Ends("great").should.be.true;
		});
		
		it("should return true if ignore trailing spaces, the target string ends with the checked string", () => {
			"Elephants are great      ".Ends("great").should.be.true;
			
		});
		
		it("should return false if the the end of target string does not end with checked string", () => {
			"Panda are great".Ends("Elephants").should.be.false;
		});
		
		it("should throw exception if trimmed ending string is empty", () => {
			"Pandas are great".Ends("  ").should.be.false;
		});
	});
	
	describe("CharAt", () => {
		it("Should return the character at the position if it is positive", () => {
			"abcde".CharAt(0).should.equal("a");
			"abcde".CharAt(4).should.equal("e");
			"abcde".CharAt(2).should.equal("c");
			" a a ~~ !! yay".CharAt(4).should.equal(' ');
		});
		
		it("should return the character from the back, if it is negative", () => {
			"abcde".CharAt(-5).should.equal("a");
			"abcde".CharAt(-1).should.equal("e");
			"abcde".CharAt(-3).should.equal("c");
			" a a ~~ !! yay".CharAt(-4).should.equal(' ');
		});
		
		it("should throw exception if index longer than the string length", () => {
			(() => "abc".CharAt(3)).should.throw("Cannot exceed length of string");
		});
		
		it("should throw exception if index is smaller than negative of string length", () => {
			(() => "abc".CharAt(-4)).should.throw("Cannot exceed length of string")
		});
		
		
	});
	
	describe("RemoveCharAt", () => {
		
		it("should return string with character at position if position is positive", () => {
			"abc".RemoveCharAt(1).should.equal("ac");
			"testtest".RemoveCharAt(3).should.equal("testest");
		});
		
		it("should return string with character at position counting from the back, if position is negative", () => {
			"abc".RemoveCharAt(-1).should.equal("ab");
			"testtest".RemoveCharAt(-3).should.equal("testtst");
		});
		
		it("should throw exception if index longer than the string length", () => {
			(() => "abc".RemoveCharAt(3)).should.throw("Cannot exceed length of string");
		});
		
		it("should throw exception if index is smaller than negative of string length", () => {
			(() => "abc".RemoveCharAt(-4)).should.throw("Cannot exceed length of string");
		});
		
	});
	
	describe("Remove", () => {
		
		it("should remove all occurence of the search target", () => {
			"kirin,test,kirin".Remove("kirin").should.equal(',test,');
			"a,b,c,d,e,f".Remove(",").should.equal("abcdef");
		});
	});
	
	describe("Without", () => {
		it("should remove all occurence of each string in the array", () => {
			let testSubj1 = "I really like to hit people! I am bad!";
			let testSubj2 = "Lorem Ipsum Lorem Ipsum Lorem Ipsum";
			
			let expected1 = " really like to hit people!  am bad!";
			let expected2 = "e Ipsu e Ipsu e Ipsu";
			let expected3 = "     ";
			
			testSubj1.Without(["I"]).should.be.equal(expected1);
			testSubj2.Without(["Lor", "m"]).should.equal(expected2);
			testSubj2.Without(["Lorem", "Ipsum"]).should.equal(expected3);
			
			
		});
	});
	
	describe("Skip", () => {
		it("should return string with the first x characters skipped", () => {
			"1234567".Skip(3).should.equal("4567");
			"kirinee~!".Skip(2).should.equal("rinee~!");
		});
		
		it("should return empty string if it skips larger than length of string", () => {
			"123".Skip(4).should.equal("");
			"123".Skip(3).should.equal("");
		});
	});
	
	describe("Take", () => {
		
		it("should return first character if value is provided", () => {
			"kirinnee".Take().should.equal("k");
		});
		
		it("should return empty if no value provided, but string is empty", () => {
			"".Take().should.equal("");
		});
		
		it("should return string with only the first x characters", () => {
			"kirinnee".Take(2).should.equal("ki");
			"kirinnee".Take(8).should.equal("kirinnee");
		});
		
		it("should return full string if it takes more than length of string", () => {
			"kirinnee".Take(20).should.equal("kirinnee");
		});
	});
	
	describe("Last", () => {
		
		it("should return first character if value is provided", () => {
			"kirinnee".Last().should.equal("e");
		});
		
		it("should return empty if no value provided, but string is empty", () => {
			"".Last().should.equal("");
		});
		
		it("should return string with the last x characters", () => {
			"kirinnee".Last(3).should.equal("nee");
			" fabricate  ".Last(2).should.equal("  ")
		});
		
		it("should return full string if it takes more than length of string", () => {
			"kirinnee".Last(20).should.equal("kirinnee");
		});
	});
	
	describe("Omit", () => {
		it("should return string with the last x characters removed", () => {
			"kirinnee".Omit(3).should.equal("kirin");
		});
		
		it("should return empty string if it cuts more than length of string", () => {
			"kirinnee".Omit(20).should.equal("");
		});
	});
	
	describe("Repeat", () => {
		it("should repeat the string x number of times", () => {
			"he".Repeat(5).should.equal("hehehehehe");
		});
		
		it("should return empty string if repeated 0 times", () => {
			"Superrr elong stinrg~~~".Repeat(0).should.equal("");
		});
		
		it("should throw exception if repeat count is negative", () => {
			(() => "he".Repeat(-5)).should.throw("Count cannot be negative");
		});
	});
	
	describe("Count", () => {
		
		it("should return the number of occurence in the string", () => {
			"hehehehehe".Count("he").should.equal(5);
			"1,2,3,4,5".Count(",").should.equal(4);
			"kirin is a good kirin".Count("in").should.equal(2);
		});
		
	});
	
	describe("Capitalize", () => {
		
		it("should return the string with the first letter being upper case", () => {
			"i am kirinnee".Capitalize().should.equal("I am kirinnee");
			"chinatown is great".Capitalize().should.equal("Chinatown is great");
			" chinatown is great".Capitalize().should.equal(" chinatown is great");
		});
	});
	
	describe("CapitalizeWords", () => {
		
		it("should return the string with every word's first letter capitalized", () => {
			"i am kirinnee".CapitalizeWords().should.equal("I Am Kirinnee");
			"chinatown is great".CapitalizeWords().should.equal("Chinatown Is Great");
			" chinatown is great".CapitalizeWords().should.equal(" Chinatown Is Great");
			
		});
		
	});
	
	describe("IsAlphanumeric", () => {
		it("should return false if string is not alphanumeric", () => {
			" ".IsAlphanumeric().should.be.false;
			"yay!".IsAlphanumeric().should.be.false;
			"lamowo~asdfas".IsAlphanumeric().should.be.false;
			"kirin test".IsAlphanumeric().should.be.false;
			
		});
		
		it("should return true if string is alphanumeric", () => {
			//"IAmKirin".IsAlphanumeric().should.be.true;
			"1atATime".IsAlphanumeric().should.be.true;
			//"l33tsp34k".IsAlphanumeric().should.be.true;
		});
	});
	
	describe("IsHex", () => {
		it("should return false if string is not hexidecimal", () => {
			"l33t".IsHexadecimal().should.be.false;
			"IAmKirin".IsHexadecimal().should.be.false;
			"123!".IsHexadecimal().should.be.false;
			"A3EF 47AD".IsHexadecimal().should.be.false;
		});
		
		it("should return true if string is hexidecimal", () => {
			"A3EF47AD".IsHexadecimal().should.be.true;
			"12345".IsHexadecimal().should.be.true;
			"ABCDEF".IsHexadecimal().should.be.true;
			"abc123".IsHexadecimal().should.be.true;
		});
	});
	
	describe("LineBreak", () => {
		it("should break convert all line breaks to \\n and break them into array", () => {
			let actual = "abc\ndef\r\nhij\rklm";
			let expected = ["abc", "def", "hij", "klm"];
			actual.LineBreak().should.deep.equal(expected);
		});
	});
});