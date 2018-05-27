/**
 * The object to define the args to invoke MethodIsCalled.
 */
export class MethodIsCalledArgs {
  /**
   * The method to test.
   */
  public method: any;
  /**
   * (Optional) The method that fires the method to test.
   */
  public onMethod?: any;
  /**
   * (Optional) The object that defines the method if differ from the tested one.
   */
  public object?: any;
  /**
   * (Optional) The args needed to invoke the method to test.
   */
  public methodArgs?: any[];
  /**
   * (Optional) The args needed to invoke the method that fires the method to test.
   */
  public onMethodArgs?: any[];

  /**
   * Creates an instance of MethodIsCalledArgs.
   * @param method The method to test.
   */
  constructor(method: any) {
    this.method = method;
  }
}
