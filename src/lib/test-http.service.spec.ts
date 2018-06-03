import { Injectable } from '@angular/core';
import { TestHttpService } from './test-http.service';

@Injectable()
export class TestHttpServiceService {}

describe('TestHttpService', () => {
  let model: TestHttpService<TestHttpServiceService>;

  beforeEach(() => {
    model = new TestHttpService(TestHttpServiceService);
  });

  it('.httpMock exists', () => {
    expect(model.hasOwnProperty('httpMock')).toBeTruthy();
  });
});
