import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseGroupComponent } from './exercise-group.component';

describe('ExerciseGroupComponent', () => {
  let component: ExerciseGroupComponent;
  let fixture: ComponentFixture<ExerciseGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseGroupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
