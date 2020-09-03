import { Router } from '@angular/router';

import { enumToLabel } from './enum.util';

export function routerToLabel(router: Router): string {
  const subUrlArray = router.url.split('/');
  return enumToLabel(subUrlArray[subUrlArray.length - 1].replace('/', ''));
}
