import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageModule } from './landingpage/landingpage.module';
import { AuthModule } from './auth/auth.module';
import { DashboardpageModule } from './dashboardpage/dashboardpage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // DashboardheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,
    DashboardpageModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
