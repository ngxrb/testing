import { ModelAbstract } from '../abstracts/model.abstract';
import { Pk } from '../types/pk.type';

/**
 * Basic helper model for tests.
 */
export class OtherTestModel implements ModelAbstract {
  public id?: Pk;
  /**
   * Model's surname.
   */
  public surname: string;

  /**
   * Creates an instance of OtherTestModel.
   * @param idOrSurname The id or the suename.
   * @param [surname] The surname.
   */
  constructor(idOrSurname: Pk, surname?: string) {
    if (surname !== undefined) {
      this.id = idOrSurname;
      this.surname = surname;
    } else {
      this.surname = idOrSurname.toString();
    }
  }
}
