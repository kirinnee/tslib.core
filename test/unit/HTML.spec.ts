// import {should} from 'chai';
// import {Core, Kore} from "../src";
//
// should();
//
// let core: Core = new Kore();
// core.ExtendPrimitives();
//
// describe("HTML", () => {
//
// 	describe("EscapeChar", () => {
// 		it("should throw exception if the length of the string is more than 1", () => {
// 			(() => "ab".EscapeChar(false)).should.throw("Only can escape characters. String cannot be longer than 1");
// 			(() => "ab".EscapeChar(true)).should.throw("Only can escape characters. String cannot be longer than 1");
//
// 		});
//
// 		it("should return original character if character does not need to be escaped", () => {
// 			"a".EscapeChar(false).should.equal('a');
// 			"a".EscapeChar(true).should.equal('a');
// 			'b'.EscapeChar(false).should.equal('b');
// 			"a".EscapeChar(true).should.equal('a');
// 			'$'.EscapeChar(false).should.equal('$');
// 			'$'.EscapeChar(true).should.equal('$');
// 			'5'.EscapeChar(false).should.equal('5');
// 			'5'.EscapeChar(true).should.equal('5');
// 		});
//
// 		it("should escape &", () => {
// 			'&'.EscapeChar(true).should.equal('&amp;');
// 			'&'.EscapeChar(false).should.equal('&amp;');
// 		});
//
// 		it("should escape \"", () => {
//
// 			'"'.EscapeChar(true).should.equal('&quot;');
// 			'"'.EscapeChar(false).should.equal('&quot;');
// 		});
//
// 		it("should escape '", () => {
// 			"'".EscapeChar(true).should.equal("&#39;");
// 			"'".EscapeChar(false).should.equal("&#39;");
// 		});
//
// 		it("should escape <", () => {
//
// 			"<".EscapeChar(true).should.equal("&lt;");
// 			"<".EscapeChar(false).should.equal("&lt;");
// 		});
//
// 		it("should escape >", () => {
//
// 			">".EscapeChar(true).should.equal("&gt;");
// 			">".EscapeChar(false).should.equal("&gt;");
// 		});
//
// 		describe("space is true", () => {
// 			it("should escape space", () => {
// 				" ".EscapeChar(true).should.equal("&nbsp;");
//
// 			});
// 		});
// 		describe("space is false", () => {
// 			it("should not escape space", () => {
// 				" ".EscapeChar(false).should.equal(" ");
// 			});
// 		});
// 	});
//
// 	describe("EscapeHTML", () => {
//
// 		describe("space is true", () => {
// 			it("should properly escape the HTML", () => {
// 				"<malicious> I am your friend & family! </malicious>".EscapeHTML(true)
// 					.should.equal("&lt;malicious&gt;&nbsp;I&nbsp;am&nbsp;your&nbsp;friend&nbsp;&amp;&nbsp;family!&nbsp;&lt;/malicious&gt;");
// 				"'I really like you!' \"alright :<\"".EscapeHTML(true).should
// 					.equal("&#39;I&nbsp;really&nbsp;like&nbsp;you!&#39;&nbsp;&quot;alright&nbsp;:&lt;&quot;");
// 			});
// 		});
//
// 		describe("space is false", () => {
// 			it("should properly escape the HTML", () => {
// 				"<malicious> I am your friend & family! </malicious>".EscapeHTML(false)
// 					.should.equal("&lt;malicious&gt; I am your friend &amp; family! &lt;/malicious&gt;");
// 				"'I really like you!' \"alright :<\"".EscapeHTML(false).should
// 					.equal("&#39;I really like you!&#39; &quot;alright :&lt;&quot;");
//
// 			})
// 		});
//
// 	});
//
// 	// describe("BreakIntoArray", () => {
// 	//
// 	// 	it("should properly split each character into an array", () => {
// 	//
// 	// 		let expected: string[] = ["&#39;", "I", "&nbsp;", "r", "e", "a", "l", "l", "y", "&nbsp;", "l", "i", "k", "e", "&nbsp;", "y", "o", "u", "!", "&#39;", "&nbsp;", "&quot;", "a", "l", "r", "i", "g", "h", "t", "&nbsp;", ":", "&lt;", "&quot;"];
// 	// 		"&#39;I&nbsp;really&nbsp;like&nbsp;you!&#39;&nbsp;&quot;alright&nbsp;:&lt;&quot;".BreakIntoArray()
// 	// 			.should.deep.equal(expected);
// 	// 	});
// 	//
// 	// });
//
// 	describe("WrapIn", () => {
// 		it("should wrap text in tags as if it is a HTML tag", () => {
// 			"i am kirinnee".WrapIn("help").should.equal("<help>i am kirinnee</help>");
// 		});
// 	});
//
// 	describe("RemoveURLVariable", () => {
// 		it("should remove anything past ?", () => {
// 			'https://abc.com?556'.RemoveURLVariable().should.equal('https://abc.com');
// 			'abc?556'.RemoveURLVariable().should.equal('abc');
// 			'https://abc.com?x=5'.RemoveURLVariable().should.equal('https://abc.com');
// 			'https://abc.com?xx=7&y=8'.RemoveURLVariable().should.equal('https://abc.com');
// 			'abc.net?556'.RemoveURLVariable().should.equal('abc.net');
// 			'?556'.RemoveURLVariable().should.equal('');
// 			'abc'.RemoveURLVariable().should.equal('abc');
// 		});
// 	});
// });