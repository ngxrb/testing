import { MethodIsCalledArgs } from '../models/method-is-called-args.model';
import { asString } from '../utils/as-string.function';

/**
 * Base abstract class to test other classes.
 */
export abstract class TestBaseAbstract<T> {
  /**
   * The class to test.
   */
  public clazz: any;

  /**
   * Check if a class is instantiable.
   */
  public isInstantiable(): void {
    expect(this.clazz).toBeTruthy();
  }

  /**
   * Check if the value of a property is the specified.
   * @param property The property to check.
   * @param value The expected value.
   */
  public hasValue(property: keyof T, value: any): void {
    this.memberExist(property);
    expect(this.clazz[property]).toEqual(value);
  }

  /**
   * Check if the property has the specified flat value.
   * @param property The property to check.
   * @param value The expected flat value.
   */
  public hasFlatValue(property: keyof T, value: any): void {
    this.memberExist(property);
    this.clazz[property].value
      ? expect(asString(this.clazz[property].value)).toEqual(asString(value))
      : expect(asString(this.clazz[property])).toEqual(asString(value));
  }

  /**
   * Check if the property is a class of the specified object type.
   * @param property The property to check.
   * @param type The expected object type.
   * @returns True if the property is a class of the specified object type. False otherwise.
   */
  public isInstanceOf(property: keyof T, type: any): boolean {
    this.memberExist(property);
    const isInstanceOf: boolean = this.clazz[property] instanceof type;
    expect(isInstanceOf).toBeTruthy(
      `${this.clazz.constructor.name}.${property} in not an class of ${type}`
    );

    return isInstanceOf;
  }

  /**
   * Check if the property is of the specified type.
   * @param property The property to check.
   * @param type The expected type.
   * @returns True if the property is of the specified type. False otherwise.
   */
  public isTypeOf(property: keyof T, type: any): boolean {
    this.memberExist(property);
    const isTypeOf: boolean = typeof this.clazz[property] === type;
    expect(isTypeOf).toBeTruthy(
      `${this.clazz.constructor.name}.${property} in not of type ${type}`
    );

    return isTypeOf;
  }

  /**
   * Check if a method has been called in the specified conditions.
   * @param args Conditions to call the method.
   */
  public methodIsCalled(args: MethodIsCalledArgs): void {
    this.memberExist(args.method, args.object);
    if (!args.object) {
      args.object = this.clazz;
    }
    spyOn(args.object, args.method);
    expect(args.object[args.method]).not.toHaveBeenCalled();
    this.clazz[args.onMethod](...args.onMethodArgs);
    expect(args.object[args.method]).toHaveBeenCalled();
    if (args.methodArgs.length > 0) {
      expect(args.object[args.method]).toHaveBeenCalledWith(...args.methodArgs);
    }
  }

  /**
   * Check that the method returns the specified value.
   * @param method The method to check.
   * @param value The expected returned value.
   * @param [args] The arguments of the method.
   * @returns True if the method returns the specified value. False otherwise.
   */
  public methodReturns(method: keyof T, value: any, ...args: any[]): boolean {
    this.memberExist(method);
    const methodValue: any = this.clazz[method](...args);
    const result: boolean = methodValue === value;
    expect(result).toBeTruthy(
      `Method "${method}" returns "${methodValue}" and was expected "${value}"`
    );

    return result;
  }

  /**
   * Check that the method returns the specified flat value.
   * @param method The method to check.
   * @param value The expected returned flat value.
   * @param [args] The arguments of the method.
   * @returns True if the method returns the specified flat value. False otherwise.
   */
  public methodReturnsFlat(method: keyof T, value: any, ...args: any[]): boolean {
    this.memberExist(method);
    const methodValue: any = asString(this.clazz[method](...args));
    const expectedValue: any = asString(value);
    const result: boolean = methodValue === expectedValue;
    expect(result).toBeTruthy(
      `Method "${method}" returns "${methodValue}" and was expected "${expectedValue}"`
    );

    return result;
  }

  /**
   * Check that the class member exists.
   * @param member The class member to be checked.
   * @param [clazz] The class to be checked.
   * @returns True if the member exists. False otherwise.
   */
  public memberExist(member: string, clazz?: any): boolean {
    const object: any = clazz || this.clazz;
    const result: boolean = member in object;
    expect(result).toBeTruthy(`"${member}" is not defined in "${object.constructor.name}"`);

    return result;
  }
}
