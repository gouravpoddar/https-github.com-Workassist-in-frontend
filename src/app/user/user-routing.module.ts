import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { RolePermissionComponent } from './usermanagement/role-permission/role-permission.component';

const routes: Routes = [
  {path:'adduser',component:AdduserComponent},
  // {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'rolePermission',component:RolePermissionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
