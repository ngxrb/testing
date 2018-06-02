import { HttpTestArgs } from './http-test-args';

export class HttpTestErrorArgs extends HttpTestArgs {
  public error?: any | null;
  public name?: string;
  public message?: string;

  constructor(path: string, verb: string, response: any, onMethod: any) {
    super(path, verb, response, onMethod);
  }
}
