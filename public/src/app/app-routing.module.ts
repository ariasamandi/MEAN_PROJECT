import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AddScheuleComponent } from './add-scheule/add-scheule.component';
import { MainComponent } from './main/main.component';
import { MealComponent } from './meal/meal.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { TodayComponent } from './today/today.component';
const routes: Routes = [
  {path: 'meal/:id', component: MealComponent},
  {path: '', component: MainComponent},
  {path: 'settings/:id', component: SettingsComponent},
  {path: 'addSchedule', component: AddScheuleComponent},
  {path: 'lunch/:id', component: LunchComponent},
  {path: 'dinner/:id', component: DinnerComponent},
  {path: 'today/:id', component: TodayComponent},
  {path: "", pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
