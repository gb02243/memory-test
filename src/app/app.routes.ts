import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent } // This sets the HomeComponent as the default route
];
