import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestArgs } from './http-test-args';

export class HttpTestBodyArgs extends HttpTestArgs {
  public body: any;

  constructor(url: string, verb: HttpVerb, response: any, onMethod: string, body: any) {
    super(url, verb, response, onMethod);
    this.body = body;
  }
}
