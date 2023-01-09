import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherPlanningComponent } from './dispatcher-planning.component';

describe('DispatcherPlanningComponent', () => {
  let component: DispatcherPlanningComponent;
  let fixture: ComponentFixture<DispatcherPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatcherPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
