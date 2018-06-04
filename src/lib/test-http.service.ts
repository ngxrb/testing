import {
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpResponseBase
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpTestBodyArgs } from './models/http-test-body-args';
import { HttpTestErrorArgs } from './models/http-test-error-args';
import { HttpTestHeaderArgs } from './models/http-test-header-args';
import { HttpTestStatusArgs } from './models/http-test-status-args';
import { TestBedConfig } from './models/testbed-config.model';
import { TestService } from './test.service';

export class TestHttpService<T> extends TestService<T> {
  public httpMock: HttpTestingController;

  constructor(clazz: any, config?: TestBedConfig) {
    super(clazz, config);
    this.httpMock = this.testBed.get(HttpTestingController);
  }

  protected setTestBed(clazz: any, config: TestBedConfig): typeof TestBed {
    config.imports.push(HttpClientTestingModule);

    return super.setTestBed(clazz, config);
  }

  public httpBody(args: HttpTestBodyArgs): void {
    this.clazz[args.onMethod](...args.onMethodArgs).subscribe((response: any) => {
      if (response instanceof HttpResponse) {
        expect(response.body).toEqual(args.body);
      } else {
        expect(response).toEqual(args.body);
      }
    });
    const req: TestRequest = this.httpMock.expectOne(args.url);
    expect(req.request.method).toBe(args.verb);
    req.flush(args.response);
  }

  public httpStatus(args: HttpTestStatusArgs): void {
    this.clazz[args.onMethod](...args.onMethodArgs).subscribe((response: any) => {
      this.isInstanceOf(response, HttpResponseBase);
      expect(response.status).toEqual(args.status);
      if (args.statusText !== undefined) {
        expect(response.statusText).toEqual(args.statusText);
      }
    });
    const req: TestRequest = this.httpMock.expectOne(args.url);
    expect(req.request.method).toBe(args.verb);
    req.flush(args.response);
  }

  public httpHeader(args: HttpTestHeaderArgs): void {
    this.clazz[args.onMethod](...args.onMethodArgs).subscribe((response: any) => {
      this.isInstanceOf(response, HttpResponseBase);
      this.isInstanceOf(response.headers, HttpHeaders);
      expect(response.headers.has(args.name)).toBeTruthy();
      if (args.value !== undefined) {
        expect(response.headers.get(args.name)).toEqual(args.value);
      }
    });
    const req: TestRequest = this.httpMock.expectOne(args.url);
    expect(req.request.method).toBe(args.verb);
    req.flush(args.response);
  }

  public httpError(args: HttpTestErrorArgs): void {
    this.clazz[args.onMethod](...args.onMethodArgs).subscribe(
      (response: any) => undefined,
      (error: any) => {
        this.isInstanceOf(error, HttpErrorResponse);
        if (args.error !== undefined) {
          expect(error.error).toEqual(args.error);
        }
        if (args.name !== undefined) {
          expect(error.name).toEqual(args.name);
        }
        if (args.message !== undefined) {
          expect(error.message).toEqual(args.message);
        }
      }
    );
    const req: TestRequest = this.httpMock.expectOne(args.url);
    expect(req.request.method).toBe(args.verb);
    req.flush(args.response);
  }

  public httpErrorStatus(args: HttpTestStatusArgs): void {
    this.clazz[args.onMethod](...args.onMethodArgs).subscribe(
      (response: any) => undefined,
      (error: any) => {
        this.isInstanceOf(error, HttpErrorResponse);
        expect(error.status).toEqual(args.status);
        if (args.statusText !== undefined) {
          expect(error.statusText).toEqual(args.statusText);
        }
      }
    );
    const req: TestRequest = this.httpMock.expectOne(args.url);
    expect(req.request.method).toBe(args.verb);
    req.flush(args.response);
  }
}
