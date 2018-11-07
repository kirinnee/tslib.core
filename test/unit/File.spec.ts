// import {should} from 'chai';
// import {Core, Kore} from "../src";
//
// should();
//
// let core: Core = new Kore();
// core.ExtendPrimitives();
//
// describe("File", () => {
// 	describe("IsFile", () => {
//
// 		it("should return false if its a trimmed empty string", () => {
// 			" ".IsFile().should.be.false;
// 			"".IsFile().should.be.false;
// 		});
//
// 		it("should return true if it has extension", () => {
// 			"xd.ext".IsFile().should.be.true;
// 			"htt://abc/html.html".IsFile().should.be.true;
// 		});
//
// 		it("should return true even if name and directory is empty", () => {
// 			".gitignore".IsFile().should.be.true;
// 		});
//
// 		it("should return false if it does not have extension", () => {
// 			"dockerfile".IsFile().should.be.false;
// 			"d/dockerfile".IsFile().should.be.false;
// 		});
// 	});
//
// 	describe("HasDir", () => {
//
// 		it("should throw exception if it is not a file", () => {
// 			(() => "d/dockerfile".HasDir()).should.throw("Invalid path: d/dockerfile");
// 		});
//
// 		it("should return true if it has slashes", () => {
// 			"C:/user/kirinnee/test/test.fabricate".HasDir().should.be.true;
// 		});
//
// 		it("should return false if it does not have slashes", () => {
// 			"test.fabricate".HasDir().should.be.false;
// 		});
// 	});
//
// 	describe("GetExt", () => {
// 		it("should throw exception if it is not a file", () => {
// 			(() => "d/dockerfile".GetExt()).should.throw("Invalid path: d/dockerfile");
// 		});
//
// 		it("should return the extension", () => {
// 			"C:/user/kirin/test.fabricate".GetExt().should.equal(".fabricate");
// 			"index.k.html".GetExt().should.equal(".html");
// 			".gitignore".GetExt().should.equal(".gitignore");
// 		});
//
//
// 	});
//
// 	describe("GetName", () => {
// 		it("should throw exception if it is not a file", () => {
// 			(() => "d/dockerfile".GetName()).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should return file name", () => {
// 			"C:/user/kirin/test.fabricate".GetName().should.equal("test");
// 			"index.k.html".GetName().should.equal("index.k");
// 		});
//
// 		it("should return empty string if it has no name", () => {
// 			".gitignore".GetName().should.equal("");
// 		});
//
// 	});
//
// 	describe("GetDir", () => {
// 		it("should throw exception if it is not a file", () => {
// 			(() => "d/dockerfile".GetDir()).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should return empty string if it does not have a directory", () => {
// 			"index.k.html".GetDir().should.equal("");
// 		});
//
// 		it("should return directory if it has a directory", () => {
// 			"C:/user/kirin/test.fav".GetDir().should.equal("C:/user/kirin/");
// 		});
// 	});
//
// 	describe("ReplaceExt", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".ReplaceExt(".fdt")).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should replace extension base on replacement string", () => {
// 			"c:/kirin/index.spec.html".ReplaceExt("js").should.equal("c:/kirin/index.spec.js");
// 		});
//
// 		it("should ignore first character if it is a dot", () => {
// 			"c:/kirin/index.spec.html".ReplaceExt(".js").should.equal("c:/kirin/index.spec.js")
// 		});
// 	});
//
// 	describe("ModifyExtension", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".EditExt((s: string) => s)).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("Should apply function on extension", () => {
// 			"C:/kirin/index.spec.html".EditExt((s: string) => s.repeat(2)).should.equal("C:/kirin/index.spec.htmlhtml");
// 		});
//
// 		it("should ignore first character if it is a dot", () => {
// 			"C:/kirin/index.spec.html".EditExt((s: string) => "." + s + "yay").should.equal("C:/kirin/index.spec.htmlyay");
// 		});
// 	});
//
// 	describe("ReplaceName", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".ReplaceName("gitignore")).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should replace the name base on the replacement string given", () => {
// 			"C:/kirin/index.spec.html".ReplaceName("fab").should.equal("C:/kirin/fab.html");
// 		});
//
// 		it("should ignore first character if it is a slash", () => {
// 			"C:/kirin/index.spec.html".ReplaceName("/fab").should.equal("C:/kirin/fab.html");
// 		});
//
// 		it("should ignore last character if it is a dot", () => {
// 			"C:/kirin/index.spec.html".ReplaceName("fab.").should.equal("C:/kirin/fab.html");
// 		});
//
// 		it("should ignore both first and last charcacter if the former is slash and latter is dot", () => {
// 			"C:/kirin/index.spec.html".ReplaceName("/fab.").should.equal("C:/kirin/fab.html");
// 		});
// 	});
//
// 	describe("ModifyName", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".EditName((s: string) => s + "a")).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should apply function on the file name to get new file name", () => {
// 			"C:/kirin/index.spec.html".EditName((s: string) => s.split(".").shift() as string).should.equal("C:/kirin/index.html");
// 		});
//
// 		it("should ignore first cahracter if it is a slash", () => {
// 			"C:/kirin/index.spec.html".EditName((s: string) => "/way" + s).should.equal("C:/kirin/wayindex.spec.html");
// 		});
//
// 		it("shuold ignore last character if it is a dot", () => {
// 			"C:/kirin/index.spec.html".EditName((s: string) => s + ".temp.").should.equal("C:/kirin/index.spec.temp.html");
// 		});
//
// 		it("should ignore both first and last charcacter if the former is slash and latter is dot", () => {
// 			"C:/kirin/index.spec.html".EditName((s: string) => "/" + s + "a.").should.equal("C:/kirin/index.speca.html");
// 		});
// 	});
//
// 	describe("ReplaceDir", () => {
//
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".ReplaceDir("ddd")).should.throw("Invalid path: d/dockerfile");
// 		});
//
// 		it("should replace the directory base on the replacement string given", () => {
// 			"file.ts".ReplaceDir("C:/kirin/").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".ReplaceDir("D:/").should.equal("D:/index.k.html");
// 		});
//
// 		it("should ignore first character if it is a slash", () => {
// 			"file.ts".ReplaceDir("/C:/kirin/").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".ReplaceDir("/D:/").should.equal("D:/index.k.html");
//
// 		});
//
// 		it("should append a slash if the last character is not a slah", () => {
// 			"file.ts".ReplaceDir("C:/kirin").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".ReplaceDir("D:").should.equal("D:/index.k.html");
//
// 		});
//
// 		it("should ignore first character and append a slash if first character is a slash and last character is NOT a slash", () => {
//
// 			"file.ts".ReplaceDir("/C:/kirin").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".ReplaceDir("/D:").should.equal("D:/index.k.html");
//
// 		});
// 	});
//
// 	describe("EditDir", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".EditDir((s: string) => s.repeat(5))).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should apply function on the directory base to get new directory", () => {
// 			"file.ts".EditDir((s: string) => s + "C:/kirin/").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".EditDir((s: string) => s + "test/").should.equal("C:/kirin/test/index.k.html");
// 		});
//
// 		it("should ignore first character if it is a slash", () => {
// 			"file.ts".EditDir((s: string) => s + "/C:/kirin/").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".EditDir((s: string) => "/" + s + "test/").should.equal("C:/kirin/test/index.k.html");
//
// 		});
//
// 		it("should append a slash if the last character is not a slash", () => {
// 			"file.ts".EditDir((s: string) => s + "C:/kirin").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".EditDir((s: string) => s + "test").should.equal("C:/kirin/test/index.k.html");
// 		});
//
// 		it("should ignore first character and append a slash if the last character is not a slash and the first character is a slash", () => {
//
// 			"file.ts".EditDir((s: string) => s + "/C:/kirin").should.equal("C:/kirin/file.ts");
// 			"C:/kirin/index.k.html".EditDir((s: string) => "/" + s + "test").should.equal("C:/kirin/test/index.k.html");
//
// 		});
//
//
// 	});
//
// 	describe("FormatFile", () => {
// 		it("should throw exception if the path is not a file", () => {
// 			(() => "d/dockerfile".FormatFile()).should.throw("Invalid path: d/dockerfile");
//
// 		});
//
// 		it("should remove leading slashes", () => {
// 			"/file.ts".FormatFile().should.equal("file.ts");
// 			"/test/file.ts".FormatFile().should.equal("test/file.ts");
// 		});
//
//
// 	});
//
// 	describe("FormatDir", () => {
//
// 		it("should remove leading slashes", () => {
// 			"/heuristic/test/".FormatDir().should.equal("heuristic/test/");
// 		});
//
// 		it("should append slash if it does not end with slash", () => {
// 			"heuristic/test".FormatDir().should.equal("heuristic/test/");
// 		});
//
// 		it("should both remove leading slashes and append slash if it does not end with slash", () => {
// 			"/heuristic/test".FormatDir().should.equal("heuristic/test/");
// 		});
// 	})
//
// });