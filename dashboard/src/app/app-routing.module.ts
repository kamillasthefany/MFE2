import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  // },
  { path: '', component: HomeComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
