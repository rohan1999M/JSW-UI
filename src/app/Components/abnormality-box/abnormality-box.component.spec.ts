import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbnormalityBoxComponent } from './abnormality-box.component';

describe('AbnormalityBoxComponent', () => {
  let component: AbnormalityBoxComponent;
  let fixture: ComponentFixture<AbnormalityBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbnormalityBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbnormalityBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
