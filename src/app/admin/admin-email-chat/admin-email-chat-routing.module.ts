import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEmailChatComponent } from './admin-email-chat.component';

const routes: Routes = [
  {
    path: '', component: AdminEmailChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEmailChatRoutingModule { }
