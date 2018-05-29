import { ModelAbstract } from '../abstracts/model.abstract';
import { Pk } from '../types/pk.type';

/**
 * Basic helper model for tests.
 */
export class TestModel implements ModelAbstract {
  public id?: Pk;
  /**
   * Model's name.
   */
  public name: string;

  /**
   * Creates an instance of TestModel.
   * @param idOrName The id or name.
   * @param [name] The name.
   */
  constructor(idOrName: Pk, name?: string) {
    if (name !== undefined) {
      this.id = idOrName;
      this.name = name;
    } else {
      this.name = idOrName.toString();
    }
  }
}
