import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStudComponent } from './nav-stud.component';

describe('NavStudComponent', () => {
  let component: NavStudComponent;
  let fixture: ComponentFixture<NavStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
