import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardpageRoutingModule } from './dashboardpage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardheaderComponent,
    DashboardfooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardpageRoutingModule
  ]
})
export class DashboardpageModule { }
