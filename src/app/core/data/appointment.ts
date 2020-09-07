import { TableSection } from '../models/table';
import { normalUser } from './consts';

export const appointments: TableSection[] = [
  {
    header: 'August 2020',
    rows: [
      {
        date: '20/08/2020',
        time: '10:00 - 12:00 PM',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting with Officials',
        detail: 'XYZ person'
      }, {
        date: '23/08/2020',
        time: '10:00 - 12:00 PM',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting with Officials',
        detail: 'with Client'
      }, {
        date: '25/08/2020',
        time: '10:00 - 12:00 PM',
        user: normalUser,
        contractor: normalUser,
        title: 'Plan Visit',
        detail: 'ABC Person'
      }
    ]
  }, {
    header: 'September 2020',
    rows: [
      {
        date: '04/09/2020',
        time: '10:00 - 12:00 PM',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting Clients',
        detail: 'ABC Person'
      }, {
        date: '06/09/2020',
        time: '10:00 - 12:00 PM',
        user: normalUser,
        contractor: normalUser,
        title: 'Project Submission',
        detail: 'with Client'
      }
    ]
  }
];
