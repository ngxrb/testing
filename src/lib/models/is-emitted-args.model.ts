export class IsEmittedArgs {
  public output: any;
  public value: any;
  public onMethod?: any;
  public onMethodArgs?: any[];

  constructor(output: any, value: any) {
    this.output = output;
    this.value = value;
  }
}
