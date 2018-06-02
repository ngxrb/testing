import { HttpTestArgs } from './http-test-args';

export class HttpTestStatusArgs extends HttpTestArgs {
  public status: number;
  public statusText?: string;

  constructor(path: string, verb: string, response: any, onMethod: any, status: number) {
    super(path, verb, response, onMethod);
    this.status = status;
  }
}
