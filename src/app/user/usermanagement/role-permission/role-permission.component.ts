import { Component,OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {
  result:any
  moduleName:any
  subModules:any
  module: any;

  constructor(private _service:UserService){

  }

  ngOnInit(){
    this.getList()

  }

  getList(){
    this._service.rolePermissionList().subscribe((resp)=>{
      // console.log(resp,'response-----------')
      this.result = resp
      this.module = this.result.data
      this.moduleName = this.module
      console.log(this.moduleName,'moduleName--')
      this.moduleName.forEach((element:any) => {
        console.log(element.sub_module)        
      });
      // this.subModules = this.module
      // // console.log(this.subModules,'submoduleName-------')


    })
  }

}
