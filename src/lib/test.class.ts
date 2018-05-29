import { TestBaseAbstract } from './abstracts/test-base.abstract';

/**
 * A basic class test helper.
 */
export class TestClass<T> extends TestBaseAbstract<T> {
  /**
   * Creates an instance of TestClass.
   * @param clazz The class to test.
   * @param args Args needed to build the class.
   */
  constructor(clazz: any, ...args: any[]) {
    super();
    this.clazz = new clazz(...args);
  }
}
