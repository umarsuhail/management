import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostersComponent } from './hosters.component';

describe('HostersComponent', () => {
  let component: HostersComponent;
  let fixture: ComponentFixture<HostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
