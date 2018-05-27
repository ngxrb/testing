import { CommonModule } from '@angular/common';
import { SchemaMetadata } from '@angular/core';
import { ComponentFixtureAutoDetect, TestModuleMetadata } from '@angular/core/testing';

/**
 * Basic configuration fot TestBed.
 *
 * Any dependency should be added to this object when the test is created.
 */
export class TestBedConfig implements TestModuleMetadata {
  /**
   * Services to provide for the tests.
   *
   * Provides ComponentFixtureAutoDetect automatically.
   */
  public providers: any[] = [{ provide: ComponentFixtureAutoDetect, useValue: true }];
  /**
   * Components and directives to add to the test.
   */
  public declarations: any[] = [];
  /**
   * Modules requireds by the test.
   */
  public imports: any[] = [CommonModule];
  /**
   * Schemas requireds by the test.
   */
  public schemas?: (SchemaMetadata | any[])[] = [];
}
