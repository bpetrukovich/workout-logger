import { Component, input } from '@angular/core';
import { ExerciseGroup } from '../interfaces/workout';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-exercise-group',
  imports: [MatListModule, MatDividerModule, MatIconModule, ExerciseComponent],
  templateUrl: './exercise-group.component.html',
  styleUrl: './exercise-group.component.scss',
})
export class ExerciseGroupComponent {
  group = input.required<ExerciseGroup>();
}
