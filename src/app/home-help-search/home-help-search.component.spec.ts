import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHelpSearchComponent } from './home-help-search.component';

describe('HomeHelpSearchComponent', () => {
  let component: HomeHelpSearchComponent;
  let fixture: ComponentFixture<HomeHelpSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHelpSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHelpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
