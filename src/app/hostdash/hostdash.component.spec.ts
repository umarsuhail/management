import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostdashComponent } from './hostdash.component';

describe('HostdashComponent', () => {
  let component: HostdashComponent;
  let fixture: ComponentFixture<HostdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
