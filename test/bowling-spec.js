var chai = require('chai');
var bowling = require('../src/bowling');

chai.should();
describe('Bowling', function () {
    [
        { frames: ['0-', '0-', '0-', '0-', '0-', '0-', '0-', '0-', '0-', '0-'], result: 0 },
        { frames: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], result: 300 },
        { frames: ['9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-'], result: 90 },
        { frames: ['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5'], result: 150 },
        { frames: ['5/', '9-', 'X', '8/', 'X', 'X', '2/', '3-', '8/', 'X', 'X', '3'], result: 169 },
        { frames: ['X', '0-', '0-', '5/', '0-', '0-', '0-', '0-', '0-', '0-'], result: 20 }

    ].forEach(ctx => {
        it(`should score ${ctx.result} with ${ctx.frames.join(' ')} `, function () {
            bowling(ctx.frames).should.equal(ctx.result)
        })
    })
});