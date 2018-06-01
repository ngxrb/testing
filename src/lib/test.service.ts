import { TestBed } from '@angular/core/testing';
import { TestAngularAbstract } from './abstracts/test-angular.abstract';
import { TestBedConfig } from './models/testbed-config.model';

export class TestService<T> extends TestAngularAbstract<T> {
  constructor(clazz: any, config?: TestBedConfig) {
    super(clazz, config);
    this.clazz = this.testBed.get(clazz);
  }

  protected setTestBed(clazz: any, config: TestBedConfig): typeof TestBed {
    config.providers.push(clazz);

    return super.setTestBed(clazz, config);
  }
}
