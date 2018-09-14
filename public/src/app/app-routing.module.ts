import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AddScheuleComponent } from './add-scheule/add-scheule.component';
import { MainComponent } from './main/main.component';
import { MealComponent } from './meal/meal.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
const routes: Routes = [
  {path: 'meal/:id', component: MealComponent},
  {path: '', component: MainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'addSchedule', component: AddScheuleComponent},
  {path: 'lunch/:id', component: LunchComponent},
  {path: 'dinner/:id', component: DinnerComponent},
  {path: "", pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
