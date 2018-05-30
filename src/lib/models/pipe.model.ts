import { PipeTransform } from '@angular/core';

export class PipeModel {
  /**
   * The pipe used to transform the value.
   */
  public name: PipeTransform;
  /**
   * The args used with the pipe.
   */
  public args: any[] = [];

  /**
   * Creates an instance of PipeModel.
   * @param name The pipe used to transform the value.
   * @param [args] The args used with the pipe.
   */
  constructor(name: PipeTransform, args?: any[]) {
    this.name = name;
    if (args !== undefined) {
      this.args = args;
    }
  }
}
