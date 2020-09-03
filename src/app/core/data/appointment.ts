import { TableSection } from '../models/table';
import { normalUser } from './consts';

export const appointments: TableSection[] = [
  {
    header: 'August 2020',
    rows: [
      {
        date: '20/08/2020',
        time: '14:20',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting with Officials',
        detail: 'XYZ person'
      }, {
        date: '23/08/2020',
        time: '09:00',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting with Officials',
        detail: 'with Client'
      }, {
        date: '25/08/2020',
        time: '16:00',
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
        time: '12:00',
        user: normalUser,
        contractor: normalUser,
        title: 'Meeting Clients',
        detail: 'ABC Person'
      }, {
        date: '06/09/2020',
        time: '12:30',
        user: normalUser,
        contractor: normalUser,
        title: 'Project Submission',
        detail: 'with Client'
      }
    ]
  }
];