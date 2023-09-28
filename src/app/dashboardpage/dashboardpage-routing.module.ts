import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
  // {path:'usermangement',component:UsermanagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardpageRoutingModule { }
