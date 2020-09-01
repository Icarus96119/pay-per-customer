import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLiveChatComponent } from './client-live-chat.component';

const routes: Routes = [
  {
    path: '', component: ClientLiveChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLiveChatRoutingModule { }
