import { HttpTestArgs } from './http-test-args';

export class HttpTestBodyArgs extends HttpTestArgs {
  public body: any;

  constructor(path: string, verb: string, response: any, onMethod: any, body: any) {
    super(path, verb, response, onMethod);
    this.body = body;
  }
}
