import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDrawComponent } from './side-draw.component';

describe('SideDrawComponent', () => {
  let component: SideDrawComponent;
  let fixture: ComponentFixture<SideDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
