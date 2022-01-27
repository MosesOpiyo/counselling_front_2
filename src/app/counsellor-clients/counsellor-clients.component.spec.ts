import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorClientsComponent } from './counsellor-clients.component';

describe('CounsellorClientsComponent', () => {
  let component: CounsellorClientsComponent;
  let fixture: ComponentFixture<CounsellorClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellorClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
