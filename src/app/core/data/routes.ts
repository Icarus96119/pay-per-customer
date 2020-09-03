export const ROUTES = {
  admin: {
    root: 'admin',
    agreement: 'agreement',
    appointment: 'appointment',
    billing: {
      root: 'billing',
      invoices: 'invoices',
      subscriptions: 'subscriptions',
    },
    campaign: 'campaign',
    email: 'email',
    home: 'home',
    report: 'report',
    task: 'task',
  },
  client: {
    root: '',
    appointment: 'appointment',
    billing: 'billing',
    myProfile: 'my-profile',
    dashboard: 'dashboard',
    lead: 'lead',
    liveChat: 'live-chat',
    notification: 'notification',
  }
};

export function toAbsolutePath(path: string | string[]): string {
  // this function accepts string or string array
  // CAUTION! - be aware, send only valid array or string
  if (typeof path === 'string') {
    return '/' + path;
  } else {
    return '/' + path.join('/');
  }
}
