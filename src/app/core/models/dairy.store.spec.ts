import { DairyStore } from './dairy.store';
import { Dairy } from "./dairy.model";

describe('DairyStore', () => {
  let sut;

  beforeEach(() => {
    sut = new DairyStore();
  });

  it('should add description to existing dairy item', () => {
    sut.updateStore = jasmine.createSpy().and.callThrough();

    const DAIRY_NAME = 'some';
    sut.dairyList = [new Dairy(DAIRY_NAME)];
    sut.selectedItem = DAIRY_NAME;
    sut.addDescription('desc1');
    sut.addDescription('desc2');

    expect(sut.dairyList[0].desc).toEqual(['desc1', 'desc2']);
  });
});
