import {should} from 'chai';
import {Rectangle, Shape} from "../../src";

should();

describe("Rectangle", () => {
    let rect: Shape = new Rectangle(5, 10);
    it("should return correct area", () => {
        rect.area.should.be.equal(50);
    });

    it("should return correct parameter", () => {
        rect.parameter().should.equal(30);
    });
});