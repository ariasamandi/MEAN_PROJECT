import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import { SettingsComponent } from './settings/settings.component';
import { AddScheuleComponent } from './add-scheule/add-scheule.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AddScheuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
