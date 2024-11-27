import { Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';

export const PROFILE_ROUTES: Routes = [
    {
      path: 'view',
      component: ProfileViewComponent
    }
];
