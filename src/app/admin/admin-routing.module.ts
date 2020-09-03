import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../core/data/routes';

import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTES.admin.home,
        pathMatch: 'full'
      }, {
        path: ROUTES.admin.agreement,
        loadChildren: () => import('./admin-agreement/admin-agreement.module').then(m => m.AdminAgreementModule)
      }, {
        path: ROUTES.admin.appointment,
        loadChildren: () => import('./admin-appointment/admin-appointment.module').then(m => m.AdminAppointmentModule)
      }, {
        path: ROUTES.admin.billing.root,
        loadChildren: () => import('./admin-billing/admin-billing.module').then(m => m.AdminBillingModule)
      }, {
        path: ROUTES.admin.campaign,
        loadChildren: () => import('./admin-campaign/admin-campaign.module').then(m => m.AdminCampaignModule)
      }, {
        path: ROUTES.admin.email,
        loadChildren: () => import('./admin-email-chat/admin-email-chat.module').then(m => m.AdminEmailChatModule)
      }, {
        path: ROUTES.admin.home,
        loadChildren: () => import('./admin-home/admin-home.module').then(m => m.AdminHomeModule)
      }, {
        path: ROUTES.admin.report,
        loadChildren: () => import('./admin-report/admin-report.module').then(m => m.AdminReportModule)
      }, {
        path: ROUTES.admin.task,
        loadChildren: () => import('./admin-task/admin-task.module').then(m => m.AdminTaskModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
