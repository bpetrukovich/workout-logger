export interface Workout {
  date: string;
  weekday: string;
  exerciseGroups: ExerciseGroup[];
  note?: string;
}

export interface ExerciseGroup {
  name: string;
  icon: string;
  exercises: Exercise[];
}

export type Exercise = SetExercise | TimeExercise;

export interface ExerciseBase {
  name: string;
}

export interface SetExercise extends ExerciseBase {
  type: 'set';
  sets: number[];
}

export interface TimeExercise extends ExerciseBase {
  type: 'time';
  timeMin: number;
}
