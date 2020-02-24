var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13),14)).to.equal("31/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 31),-14)).to.equal("13/10/2019");
    });
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13),new Date(2019, 10, 31))).to.equal(14);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 28, 31),new Date(2019, 10, 13))).to.equal(-14);
    });
});
