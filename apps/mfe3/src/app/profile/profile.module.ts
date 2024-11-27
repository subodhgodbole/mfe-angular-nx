import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profile.routes';
import { AuthLibModule } from '@demo/auth-lib';
import { ServicesModule } from '@demo/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthLibModule,
    ServicesModule,
    RouterModule.forChild(PROFILE_ROUTES)
  ],
  declarations: [
    ProfileViewComponent
  ]
})
export class ProfileModule { }
