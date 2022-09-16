import { randomCat } from './random-cat';

describe('randomCat', () => {
  it('should work', () => {
    expect(randomCat()).toEqual('random-cat');
  });
});
