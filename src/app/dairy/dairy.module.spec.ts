import { DairyModule } from './dairy.module';

describe('DairyModule', () => {
  let dairyModule: DairyModule;

  beforeEach(() => {
    dairyModule = new DairyModule();
  });

  it('should create an instance', () => {
    expect(dairyModule).toBeTruthy();
  });
});
