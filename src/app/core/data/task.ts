import { TableSection } from '../models/table';
import { normalUser } from './consts';

export const tasks: TableSection[] = [
  {
    header: 'Wednesday',
    rows: [
      {
        isCarriedOut: false,
        user: normalUser,
        title: 'Quote accepted by Jonathan',
        createdAt: 'Due 1 week ago'
      }
    ]
  }, {
    header: 'Tuesday',
    rows: [
      {
        isCarriedOut: false,
        user: normalUser,
        title: 'Check off the boxes or send invoice',
        createdAt: 'Due 3 days ago'
      }, {
        isCarriedOut: false,
        user: normalUser,
        title: 'New Call with Jack',
        createdAt: 'Due 1 day ago'
      }, {
        isCarriedOut: true,
        user: normalUser,
        title: 'Follow Up 2019',
        createdAt: 'Due in 3 days'
      }
    ]
  }, {
    header: 'Monday',
    rows: [
      {
        isCarriedOut: true,
        user: normalUser,
        title: 'Invoice Received by vendor',
        createdAt: 'Due in 1 day'
      }
    ]
  }
];

export const taskCardData = {
  OPEN: [
    {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }, {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }, {
      isCarriedOut: false,
      user: normalUser,
      title: 'Onboarding for new UX(copy front)',
      createdAt: 'Due 1 week ago'
    },
  ],
  IN_PROGRESS: [
    {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }, {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }, {
      isCarriedOut: false,
      user: normalUser,
      title: 'Onboarding for new UX(copy front)',
      createdAt: 'Due 1 week ago'
    },
  ],
  COMPLETED: [
    {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }, {
      isCarriedOut: false,
      user: normalUser,
      title: 'Notification preferences: ability to "apply settings to all of my teams"',
      createdAt: 'Due 1 week ago'
    }
  ]
}
