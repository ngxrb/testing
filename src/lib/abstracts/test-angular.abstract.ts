import { TestBed } from '@angular/core/testing';
import { TestBedConfig } from '../models/testbed-config.model';
import { TestBaseAbstract } from './test-base.abstract';

/**
 * Base class to test Angular elements.
 */
export abstract class TestAngularAbstract<T> extends TestBaseAbstract<T> {
  /**
   * Configuration and initialization of the test environment of the class.
   */
  public testBed: typeof TestBed;

  /**
   * Creates an instance of TestAngularAbstract.
   * @param clazz The class type to be tested.
   * @param [config] The custom module configuration needed to test the class.
   */
  constructor(clazz: any, config?: TestBedConfig) {
    super();
    this.testBed = this.setTestBed(clazz, config !== undefined ? config : new TestBedConfig());
  }

  /**
   * Set the testBed property.
   * @param clazz The class type to be tested.
   * @param config The custom module configuration needed to test the class.
   * @returns The configured TestBed object.
   */
  protected setTestBed(clazz: any, config: TestBedConfig): typeof TestBed {
    return TestBed.configureTestingModule(config);
  }
}
