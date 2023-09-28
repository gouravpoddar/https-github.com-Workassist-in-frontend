import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { DashboardComponent } from './dashboardpage/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { UsermanagementComponent } from './user/usermanagement/usermanagement.component';
import { RolePermissionComponent } from './user/usermanagement/role-permission/role-permission.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule)
  },
  {
    path: 'admin/login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path:'dashboard',component:DashboardComponent,
  loadChildren: () => import('./dashboardpage/dashboardpage.module').then(m => m.DashboardpageModule)
},
  {path:'usermanagement',
component:UsermanagementComponent,
loadChildren: () => import('./user/user.module').then(m=>m.UserModule)},
// {path:'rolePermission',component:RolePermissionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
