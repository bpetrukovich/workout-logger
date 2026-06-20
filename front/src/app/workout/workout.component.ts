import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Workout } from '../interfaces/workout';
import { ExerciseGroupComponent } from '../exercise-group/exercise-group.component';

@Component({
  selector: 'app-workout',
  imports: [MatCardModule, MatIconModule, MatButtonModule, ExerciseGroupComponent],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workout = input.required<Workout>();
}
