import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracnghiemComponent } from './tracnghiem.component';

describe('TracnghiemComponent', () => {
  let component: TracnghiemComponent;
  let fixture: ComponentFixture<TracnghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracnghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracnghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
