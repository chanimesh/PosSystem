import roundDecimal from './roundDecimal'

describe('roundDecimal ', () => {
 it('returns 22.328 for value 22.3284 and precision 3 ', () => {
     const result = roundDecimal(22.3284, 3);
     expect(result).toEqual(22.328);
 });
  it('returns 22 for value 22 and precision 2 ', () => {
     const result = roundDecimal(22, 2);
     expect(result).toEqual(22);
 });

});
