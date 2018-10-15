import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordashComponent } from './visitordash.component';

describe('VisitordashComponent', () => {
  let component: VisitordashComponent;
  let fixture: ComponentFixture<VisitordashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
