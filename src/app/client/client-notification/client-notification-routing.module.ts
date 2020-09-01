import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientNotificationComponent} from './client-notification.component';

const routes: Routes = [
  {
    path: '', component: ClientNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientNotificationRoutingModule { }
