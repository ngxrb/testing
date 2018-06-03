import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestArgs } from './http-test-args';

export class HttpTestHeaderArgs extends HttpTestArgs {
  public name: string;
  public value?: any;

  constructor(url: string, verb: HttpVerb, response: any, onMethod: string, name: string) {
    super(url, verb, response, onMethod);
    this.name = name;
  }
}
