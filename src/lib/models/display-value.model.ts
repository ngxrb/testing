import { PipeTransform } from '@angular/core';
import { asString } from '../utils/as-string.function';

/**
 * Defines a property value on component and the displayed value on template.
 */
export class DisplayValue<T> {
  public property: string;
  public propertyValue: T;
  public selector: string;
  public pipe?: PipeTransform;
  public pipeArgs?: any[];
  protected _selectorValue?: string;

  /**
   * Creates an clazz of DisplayValue.
   * @param property Property to be checked.
   * @param value Value of the property.
   * @param selector Selector who contain the value.
   */
  constructor(property: string, value: T, selector: string) {
    this.property = property;
    this.propertyValue = value;
    this.selector = selector;
  }

  /**
   * The value as is displayed on template.
   */
  get selectorValue(): any {
    return this._selectorValue
      ? this.transform(this._selectorValue)
      : this.transform(this.propertyValue);
  }

  set selectorValue(value: any) {
    this._selectorValue = this.transform(value);
  }

  /**
   * Transfor the value using the provided pipes.
   * @param value The value to transform.
   * @returns The transformed value as string.
   */
  protected transform(value: T | string): string {
    return this.pipe
      ? asString(this.pipe.transform(value, ...(this.pipeArgs || [])))
      : asString(value);
  }
}
