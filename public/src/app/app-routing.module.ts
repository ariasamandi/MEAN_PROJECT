import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AddScheuleComponent } from './add-scheule/add-scheule.component';
import { MainComponent } from './main/main.component';
import { MealComponent } from './meal/meal.component';
const routes: Routes = [
  {path: 'meal', component: MealComponent},
  {path: '', component: MainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'addSchedule', component: AddScheuleComponent},
  {path: "", pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
