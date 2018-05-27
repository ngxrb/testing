import { EventEmitter } from '@angular/core';
import { testModel, testNumber, testObservable, testString } from '../data/test.data';
import { isSubscribable } from './is-subscribable.function';

describe('isSubscribable', () => {
  it('return false for basic types', () => {
    expect(isSubscribable(testString)).toBeFalsy();
    expect(isSubscribable(testNumber)).toBeFalsy();
    expect(isSubscribable(true)).toBeFalsy();
  });

  it('return false for non subscribable objects', () => {
    expect(isSubscribable(testModel)).toBeFalsy();
  });

  it('return true for Observables', () => {
    expect(isSubscribable(testObservable)).toBeTruthy();
  });

  it('return true for EventEmmiters', () => {
    const eventEmitter: EventEmitter<any> = new EventEmitter();
    expect(isSubscribable(eventEmitter)).toBeTruthy();
  });
});
