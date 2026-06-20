import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutComponent } from '../workout/workout.component';
import { mockWorkouts } from '../workout/mock-workouts';

@Component({
  selector: 'app-experiment',
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonModule,
    WorkoutComponent,
  ],
  templateUrl: './experiment.html',
})
export class Experiment {
  workouts = mockWorkouts;
}
