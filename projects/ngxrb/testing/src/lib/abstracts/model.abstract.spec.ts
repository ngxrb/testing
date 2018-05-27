import { testNumber } from '../data/test.data';
import { isPk } from '../utils/is-pk.function';
import { ModelAbstract } from './model.abstract';

class ModelClass extends ModelAbstract {}

describe('ModelAbstract', () => {
  let model: ModelClass;

  beforeEach(() => {
    model = { id: testNumber };
  });

  it('.id exists', () => {
    expect(model.hasOwnProperty('id')).toBeTruthy();
  });

  it('.id is a Pk', () => {
    expect(isPk(model.id)).toBeTruthy();
  });

  it('.id can be setted on creation', () => {
    expect(model.id).toEqual(testNumber);
  });
});
