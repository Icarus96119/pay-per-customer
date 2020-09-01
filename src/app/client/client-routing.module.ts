import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';

import { ClientLayoutComponent } from '../layout/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTES.client.dashboard,
        pathMatch: 'full' }, {
        path: ROUTES.client.appointment,
        loadChildren: () =>
          import('./client-appointment/client-appointment.module').then(m => m.ClientAppointmentModule)
      }, {
        path: ROUTES.client.billing,
        loadChildren: () => import('./client-billing/client-billing.module').then(m => m.ClientBillingModule)
      }, {
        path: ROUTES.client.myProfile,
        loadChildren: () => import('./client-my-profile/client-my-profile.module').then(m => m.ClientMyProfileModule)
      }, {
        path: ROUTES.client.dashboard,
        loadChildren: () => import('./client-dashboard/client-dashboard.module').then(m => m.ClientDashboardModule)
      }, {
        path: ROUTES.client.lead,
        loadChildren: () => import('./client-lead/client-lead.module').then(m => m.ClientLeadModule)
      }, {
        path: ROUTES.client.liveChat,
        loadChildren: () =>
          import('./client-live-chat/client-live-chat-routing.module').then(m => m.ClientLiveChatRoutingModule)
      }, {
        path: ROUTES.client.notification,
        loadChildren: () =>
          import('./client-notification/client-notification.module').then(m => m.ClientNotificationModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
