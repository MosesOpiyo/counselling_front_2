import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorRegistrationComponent } from './counsellor-registration.component';

describe('CounsellorRegistrationComponent', () => {
  let component: CounsellorRegistrationComponent;
  let fixture: ComponentFixture<CounsellorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
