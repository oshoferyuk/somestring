import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyItemComponent } from './dairy-item.component';

describe('DairyItemComponent', () => {
  let component: DairyItemComponent;
  let fixture: ComponentFixture<DairyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
