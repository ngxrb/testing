import { ChangeDetectorRef } from '@angular/core';

export class MockChangeDetectorRef extends ChangeDetectorRef {
  constructor() {
    super();
  }
  public markForCheck(): void {}
  public detach(): void {}
  public detectChanges(): void {}
  public checkNoChanges(): void {}
  public reattach(): void {}
}
