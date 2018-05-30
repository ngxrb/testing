import { PipeModel } from './pipe.model';

/**
 * Defines a property value on component and the displayed value on template.
 */
export class DisplayValueArgs<T> {
  /**
   * The property to test.
   */
  public property: string;
  /**
   * The property value.
   */
  public propertyValue: T;
  /**
   * The template selector that contain the binded value.
   */
  public selector: string;
  /**
   * (Optional) The pipes used to transform the value. It's important to define them in the same
   * order that are defined in the template.
   */
  public pipeList?: PipeModel[];

  /**
   * Creates an clazz of DisplayValueArgs.
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
    return this.transform(this.propertyValue);
  }

  private transform(value: any): string {
    let transformedValue: any = value;

    if (this.pipeList !== undefined) {
      this.pipeList.forEach((pipe: PipeModel) => {
        transformedValue = pipe.name.transform(transformedValue, ...pipe.args);
      });
    }

    return transformedValue.toString();
  }
}
