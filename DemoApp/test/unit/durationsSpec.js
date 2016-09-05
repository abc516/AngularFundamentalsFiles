/**
 * Created by anton on 9/5/16.
 */
describe('durations', function () {

    beforeEach(module('eventsApp'))
    
    it('should return "half Hour" when given a 1', inject(function (durationsFilter) {
        expect(durationsFilter(1)).toEqual('Half Hour')
    }))

    it('should return "1 Hour" when given a 2', inject(function (durationsFilter) {
        expect(durationsFilter(2)).toEqual('1 Hour')
    }))

     it('should return "Half Day" when given a 3', inject(function (durationsFilter) {
        expect(durationsFilter(3)).toEqual('Half Day')
    }))

     it('should return "Full Day" when given a 4', inject(function (durationsFilter) {
        expect(durationsFilter(4)).toEqual('Full Day')
    }))
})