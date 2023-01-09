import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBoxComponent } from './sample-box.component';

describe('SampleBoxComponent', () => {
  let component: SampleBoxComponent;
  let fixture: ComponentFixture<SampleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
