import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCounsellorComponent } from './specific-counsellor.component';

describe('SpecificCounsellorComponent', () => {
  let component: SpecificCounsellorComponent;
  let fixture: ComponentFixture<SpecificCounsellorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificCounsellorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCounsellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
