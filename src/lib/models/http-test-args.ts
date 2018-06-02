export class HttpTestArgs {
  public url: string;
  public verb: string;
  public response: any;
  public onMethod: any;
  public onMethodArgs: any[] = [];

  constructor(url: string, verb: string, response: any, onMethod: any) {
    this.url = url;
    this.verb = verb;
    this.response = response;
    this.onMethod = onMethod;
  }
}
