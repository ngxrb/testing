import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testModel } from './data/test.data';
import { HttpVerb } from './enums/http-verb.enum';
import { HttpTestBodyArgs } from './models/http-test-body-args';
import { TestHttpService } from './test-http.service';

const url: string = '/test';

@Injectable()
export class TestHttpServiceService {
  constructor(protected http: HttpClient) {}

  public basicGet(): Observable<any> {
    return this.http.get(url);
  }
}

describe('TestHttpService', () => {
  let test: TestHttpService<TestHttpServiceService>;

  beforeEach(() => {
    test = new TestHttpService(TestHttpServiceService);
  });

  it('.httpMock exists', () => {
    expect(test.hasOwnProperty('httpMock')).toBeTruthy();
  });

  it('httpBody', () => {
    const args: HttpTestBodyArgs = new HttpTestBodyArgs(
      url,
      HttpVerb.GET,
      testModel,
      'basicGet',
      testModel
    );
    test.httpBody(args);
  });

  it('httpBody HttpResponse', () => {
    const args: HttpTestBodyArgs = new HttpTestBodyArgs(
      url,
      HttpVerb.GET,
      new HttpResponse({ body: testModel }),
      'basicGet',
      testModel
    );
    test.httpBody(args);
  });
});
