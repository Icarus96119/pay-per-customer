import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NotificationMenuComponent,
    NotificationBoxComponent,
    ProfileDropdownComponent,
    AppHeaderComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    CommonUiKitModule,
    AvatarModule,
    IconModule,
    PipesModule
  ],
  exports: [
    SidebarComponent,
    NotificationMenuComponent,
    ProfileDropdownComponent,
    AppHeaderComponent
  ]
})
export class LayoutKitModule { }
