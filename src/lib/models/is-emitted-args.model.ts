export class IsEmittedArgs {
  /**
   * The EventEmitter property.
   */
  public output: any;
  /**
   * The emitted value.
   */
  public value: any;
  /**
   * (Optional) The method that fires the event to test.
   */
  public onMethod?: any;
  /**
   * (Optional) The args needed to invoke the method that fires the event to test.
   */
  public onMethodArgs: any[] = [];

  /**
   * Creates an instance of IsEmittedArgs.
   * @param output The EventEmitter property.
   * @param value The emitted value.
   */
  constructor(output: any, value: any) {
    this.output = output;
    this.value = value;
  }
}
