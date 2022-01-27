import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorOptionsComponent } from './counsellor-options.component';

describe('CounsellorOptionsComponent', () => {
  let component: CounsellorOptionsComponent;
  let fixture: ComponentFixture<CounsellorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
