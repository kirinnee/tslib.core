import {should} from 'chai';
import {Shape, Square} from "../../src";

should();

describe("Square", () => {

    let square: Shape = new Square(5);
    
    it("should return correct area", () => {
        square.area.should.be.equal(25);
    });

    it("should return correct parameter", () => {
        square.parameter().should.equal(20);
    });

});
