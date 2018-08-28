import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AddScheuleComponent } from './add-scheule/add-scheule.component';
const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'addSchedule', component: AddScheuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
