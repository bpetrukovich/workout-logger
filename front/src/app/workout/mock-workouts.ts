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
            name: 'Pull-ups',
            sets: [4, 3, 3],
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
            sets: [8, 9],
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
    weekday: 'Friday',
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
  {
    date: '17 June',
    weekday: 'Thursday',
    exerciseGroups: [
      {
        name: 'Push-ups',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Push-ups',
            sets: [4, 4, 4],
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
            sets: [12, 12, 12],
            type: 'set',
          },
        ],
      },
    ],
  },
  {
    date: '16 June',
    weekday: 'Wednesday',
    exerciseGroups: [
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running (under 140 bpm)',
            timeMin: 12,
            type: 'time',
          },
        ],
      },
    ],
  },
  {
    date: '15 June',
    weekday: 'Tuesday',
    exerciseGroups: [],
    note: 'Missed workout, dentist appointment and travel to Borisov',
  },
  {
    date: '14 June',
    weekday: 'Monday',
    exerciseGroups: [
      {
        name: 'Recovery',
        icon: 'directions_walk',
        exercises: [
          {
            name: 'Walking',
            timeMin: 20,
            type: 'time',
          },
        ],
      },
    ],
    note: 'Recovery day with Anya, long warm-up and walking',
  },
  {
    date: '13 June',
    weekday: 'Sunday',
    exerciseGroups: [
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running (120-140 bpm)',
            timeMin: 10,
            type: 'time',
          },
        ],
      },
      {
        name: 'Pull-ups',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Pull-ups',
            sets: [2, 2, 3],
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
            sets: [12, 14],
            type: 'set',
          },
        ],
      },
    ],
  },
  {
    date: '12 June',
    weekday: 'Saturday',
    exerciseGroups: [
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running (120-140 bpm)',
            timeMin: 10,
            type: 'time',
          },
        ],
      },
    ],
  },
  {
    date: '11 June',
    weekday: 'Friday',
    exerciseGroups: [
      {
        name: 'Recovery',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Pull-ups (easy)',
            sets: [1],
            type: 'set',
          },
          {
            name: 'Push-ups (easy)',
            sets: [1],
            type: 'set',
          },
          {
            name: 'Stretching',
            sets: [1],
            type: 'set',
          },
          {
            name: 'Stair climbing',
            sets: [1],
            type: 'set',
          },
        ],
      },
    ],
    note: 'Easy recovery day, no effort',
  },
  {
    date: '10 June',
    weekday: 'Thursday',
    exerciseGroups: [
      {
        name: 'Squats',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Squats',
            sets: [12, 12, 12],
            type: 'set',
          },
        ],
      },
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running (120-140 bpm)',
            timeMin: 5,
            type: 'time',
          },
        ],
      },
    ],
  },
  {
    date: '09 June',
    weekday: 'Wednesday',
    exerciseGroups: [
      {
        name: 'Cardio',
        icon: 'directions_run',
        exercises: [
          {
            name: 'Running',
            timeMin: 10,
            type: 'time',
          },
        ],
      },
    ],
  },
  {
    date: '08 June',
    weekday: 'Tuesday',
    exerciseGroups: [
      {
        name: 'Pull-ups',
        icon: 'fitness_center',
        exercises: [
          {
            name: 'Pull-ups',
            sets: [1, 2],
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
            sets: [8],
            type: 'set',
          },
        ],
      },
    ],
  },
];
