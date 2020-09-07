import { CommunicationType } from '../models/email-chat';
import { normalUser } from './consts';

export const emailChatData = {
  OPEN: [
    {
      type: CommunicationType.Email,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Chat,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Email,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }
  ],
  IN_REVIEW: [
    {
      type: CommunicationType.Email,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Chat,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Email,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Chat,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }
  ],
  CLOSED: [
    {
      type: CommunicationType.Email,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }, {
      type: CommunicationType.Chat,
      receivedDate: '20/10/2020',
      lastCommunicationDate: '24/10/2020',
      subject: 'I am really happy',
      sender: normalUser,
      receiver: normalUser
    }
  ]
}