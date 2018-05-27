import { Pk } from '../types/pk.type';

/**
 * Basic model class.
 */
export abstract class ModelAbstract {
  /**
   * Model's primary key.
   */
  public readonly id?: Pk;
}
