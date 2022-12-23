import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'products',
      loadChildren: () => import('mfe1/Module').then(m => m.ProductsModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];

