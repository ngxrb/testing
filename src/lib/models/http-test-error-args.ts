import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestArgs } from './http-test-args';

export class HttpTestErrorArgs extends HttpTestArgs {
  public error?: any | null;
  public name?: string;
  public message?: string;

  constructor(url: string, verb: HttpVerb, response: any, onMethod: string) {
    super(url, verb, response, onMethod);
  }
}
