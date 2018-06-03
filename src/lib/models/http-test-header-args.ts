import { HttpTestArgs } from './http-test-args';

export class HttpTestHeaderArgs extends HttpTestArgs {
  public name: string;
  public value?: any;

  constructor(path: string, verb: string, response: any, onMethod: any, name: string) {
    super(path, verb, response, onMethod);
    this.name = name;
  }
}
