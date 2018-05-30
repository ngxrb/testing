import { MockChangeDetectorRef } from './mock-change-detector-ref.model';

describe('MockChangeDetectorRef', () => {
  let model: MockChangeDetectorRef;

  beforeEach(() => {
    model = new MockChangeDetectorRef();
  });

  it('.markForCheck exists', () => {
    expect(model.markForCheck).toBeDefined();
  });

  it('.detach exists', () => {
    expect(typeof model.detach).toBe('function');
  });

  it('.detectChanges exists', () => {
    expect(() => model.detectChanges()).toBeTruthy();
  });

  it('.checkNoChanges exists', () => {
    expect(model.checkNoChanges).toBeDefined();
  });

  it('.reattach exists', () => {
    expect(model.reattach).toBeDefined();
  });
});
