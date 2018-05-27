import { CommonModule } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { compare } from '../utils/compare.function';
import { TestBedConfig } from './testbed-config.model';

describe('TestBedConfig', () => {
  let config: TestBedConfig;

  beforeEach(() => {
    config = new TestBedConfig();
  });

  it('.providers exists', () => {
    expect(config.hasOwnProperty('providers')).toBeTruthy();
  });

  it('.providers is an array', () => {
    expect(config.providers instanceof Array).toBeTruthy();
  });

  it('.providers contains ComponentFixtureAutoDetect', () => {
    expect(
      compare(config.providers[0], { provide: ComponentFixtureAutoDetect, useValue: true })
    ).toBeTruthy();
  });

  it('.declarations exists', () => {
    expect(config.hasOwnProperty('declarations')).toBeTruthy();
  });

  it('.declarations is an array', () => {
    expect(config.declarations instanceof Array).toBeTruthy();
  });

  it('.imports exists', () => {
    expect(config.hasOwnProperty('imports')).toBeTruthy();
  });

  it('.imports is an array', () => {
    expect(config.imports instanceof Array).toBeTruthy();
  });

  it('.imports contains CommonModule', () => {
    expect(compare(config.imports[0], CommonModule)).toBeTruthy();
  });

  it('.schemas exists', () => {
    expect(config.hasOwnProperty('schemas')).toBeTruthy();
  });

  it('.schemas is an array', () => {
    expect(config.schemas instanceof Array).toBeTruthy();
  });
});
