import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyCommentComponent } from './dairy-comment.component';

describe('DairyCommentComponent', () => {
  let component: DairyCommentComponent;
  let fixture: ComponentFixture<DairyCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
