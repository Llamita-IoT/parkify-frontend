import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/pages/dashboard/dashboard.component";
import { ManagerProfileComponent } from './manager-profile/pages/manager-profile/manager-profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: ' dashboard', pathMatch: 'full' },
  { path: 'profile', component: ManagerProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
