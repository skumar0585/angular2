import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QulificationComponent } from './qulification.component';

describe('QulificationComponent', () => {
  let component: QulificationComponent;
  let fixture: ComponentFixture<QulificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QulificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QulificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
