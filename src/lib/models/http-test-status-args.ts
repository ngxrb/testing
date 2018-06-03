import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestArgs } from './http-test-args';

export class HttpTestStatusArgs extends HttpTestArgs {
  public status: number;
  public statusText?: string;

  constructor(url: string, verb: HttpVerb, response: any, onMethod: string, status: number) {
    super(url, verb, response, onMethod);
    this.status = status;
  }
}
