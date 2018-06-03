import { HttpVerb } from '../enums/http-verb.enum';

export class HttpTestArgs {
  public url: string;
  public verb: HttpVerb;
  public response: any;
  public onMethod: string;
  public onMethodArgs: any[] = [];

  constructor(url: string, verb: HttpVerb, response: any, onMethod: string) {
    this.url = url;
    this.verb = verb;
    this.response = response;
    this.onMethod = onMethod;
  }
}
