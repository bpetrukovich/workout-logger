import { Component, input } from '@angular/core';
import { Exercise, SetExercise, TimeExercise } from '../interfaces/workout';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exercise',
  imports: [MatListModule, MatChipsModule, MatIconModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent {
  exercise = input.required<Exercise>();

  isTimeExercise(ex: Exercise): ex is TimeExercise {
    return ex.type === 'time';
  }

  isSetExercise(ex: Exercise): ex is SetExercise {
    return ex.type === 'set';
  }
}
