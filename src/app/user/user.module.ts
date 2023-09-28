import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RolePermissionComponent } from './usermanagement/role-permission/role-permission.component';


@NgModule({
  declarations: [
    UsermanagementComponent,
    UpdateuserComponent,
    AdduserComponent,
    RolePermissionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ]
})
export class UserModule { }
