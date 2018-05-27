import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { OtherTestModel } from '../models/other-test.model';
import { TestModel } from '../models/test.model';
import { TestBedConfig } from '../models/testbed-config.model';

export const testString: string = '1';
export const testString2: string = '2';
export const testString3: string = '3';
export const testStringArray: string[] = [testString, testString2];

export const testNumber: number = 1;
export const testNumber2: number = 2;
export const testNumber3: number = 3;
export const testNumberArray: number[] = [testNumber, testNumber2];

export const testModel: TestModel = new TestModel(testNumber, testString);
export const testModel2: TestModel = new TestModel(testNumber2, testString2);
export const testModel3: TestModel = new TestModel(testNumber3, testString3);
export const testModelArray: TestModel[] = [testModel, testModel2];
export const nullOtherTestModel: any = { id: null, surname: null };
export const undefinedOtherTestModel: any = { id: undefined, surname: undefined };

export const otherTestModel: OtherTestModel = new OtherTestModel(testNumber, testString);
export const otherTestModel2: OtherTestModel = new OtherTestModel(testNumber2, testString2);
export const otherTestModel3: OtherTestModel = new OtherTestModel(testNumber3, testString3);
export const otherTestModelArray: OtherTestModel[] = [otherTestModel, otherTestModel2];
export const nullTestModel: any = { id: null, name: null };
export const undefinedTestModel: any = { id: undefined, name: undefined };

export const testObservable: Observable<string> = of(testString);
export const testObservable2: Observable<string> = of(testString2);

export const testError: Error = new Error();
export const testErrorString: Error = new Error(testString);
export const testObservableError: Observable<string> = throwError(testString);

export const testBedConfig: TestBedConfig = new TestBedConfig();
const testBedConfigNew: TestBedConfig = new TestBedConfig();
testBedConfigNew.imports.push(HttpClientModule);
export const testBedConfig2: TestBedConfig = testBedConfigNew;
