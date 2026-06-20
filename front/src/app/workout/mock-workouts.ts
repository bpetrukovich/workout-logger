import { Workout } from '../interfaces/workout';

export const mockWorkouts: Workout[] = [
  {
    date: '19 June',
    weekday: 'Saturday',
    exerciseGroups: [
      {
        name: 'Pull-ups',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Wide grip pull-ups',
            sets: [3, 3],
            type: 'set',
          },
          {
            name: 'Pull-ups',
            sets: [4, 4],
            type: 'set',
          },
        ],
      },
      {
        name: 'Core',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Hanging leg raises',
            sets: [8, 8],
            type: 'set',
          },
          {
            name: 'Parallel bar leg raises',
            sets: [14],
            type: 'set',
          },
        ],
      },
    ],
  },
  {
    date: '18 June',
    weekday: 'Thursday',
    exerciseGroups: [
      {
        name: 'Push-ups',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Push-ups',
            sets: [4, 4],
            type: 'set',
          },
          {
            name: 'Push-ups',
            sets: [4, 4],
            type: 'set',
          },
          {
            name: 'Push-ups',
            sets: [4, 4],
            type: 'set',
          },
        ],
      },
      {
        name: 'Squats',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Squats',
            sets: [12, 12],
            type: 'set',
          },
          {
            name: 'Narrow squats',
            sets: [12],
            type: 'set',
          },
        ],
      },
    ],
    note: 'Feeling some progress in pull-ups',
  },
  {
    date: '15 June',
    weekday: 'Tuesday',
    exerciseGroups: [
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running',
            timeMin: 12,
            type: 'time',
          },
        ],
      },
    ],
  },
];
