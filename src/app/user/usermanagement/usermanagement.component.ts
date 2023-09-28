import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  result:any;
  result1:any
  departmentResult:any
  dataValue:any
  modelshow = false
  submitted = false
  role:any;
  status:any;
  departmentId:any;
  departmentname:any
  addEmpForm : FormGroup
  updateEmpForm : FormGroup
  department: any;

  roleResult:any;
  // role:any;
  roleName:any
  updateId:any


  page: number = 1;
  count: number = 0;
  tableSize:any;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private _service:UserService,private fb:FormBuilder,private actRoute:ActivatedRoute,private router:Router){
    this.addEmpForm = this.fb.group({
      first_name:['',Validators.required],
      last_name:'',
      email:'',
      country_code:'',
      mobile_number:'',
      department_id:'',
      role_id :'',
      status_id:'',
      password:''
    })

    this.updateEmpForm = this.fb.group({
      first_name:['',Validators.required],
      last_name:'',
      email:'',
      country_code:'',
      mobile_number:'',
      department_id:'',
      role_id :'',
      status_id:'',
      password:''
    })
  }

  ngOnInit(){
    this.updateUser()
    this.updateId = this.actRoute.snapshot.paramMap.get('id');
    // console.log(this.updateId,'id----')

    this._service.get().subscribe((response:any)=>{
      // console.log(response)
      this.result = response
      // console.log(this.result,'result------')
      this.dataValue = this.result.data.data
      // console.log(this.dataValue,'datavalue------')

    })

    // })
    this.getUser()

    this.getDepatment()

    this.getRole()

    // this._service.update(this.updateId).subscribe((resp)=>{
    //   console.log(resp,'respUpdate-------')

    // })
    
  }

  getUser(){
    this._service.get().subscribe((response:any)=>{
      // console.log(response)
      this.result = response
      // console.log(this.result,'result------')
      this.tableSize = this.result.data.per_page
      // console.log(this.tableSize,'sizes----')

    })
  }


  getDepatment(){
    this._service.department().subscribe((response)=>{
      // console.log(response,'department----')
      this.departmentResult = response
      // console.log(this.departmentResult,'result-----')
      this.department = this.departmentResult.data
      // console.log(this.department,'department')
      this.departmentId = this.department[0].id
      // console.log(this.departmentId,'departmentid-----')
      this.departmentname = this.department[1].name
      // console.log(this.departmentname,'depatmentname------')
      
    })
  }

  getRole(){
    this._service.role().subscribe((response)=>{
      this.roleResult = response
      // console.log(this.roleResult,'roleresult------')
      this.role = this.roleResult.data
      // console.log(this.role,'role---------')


    })
  }

  @Output() id = new EventEmitter<any>

  updateUserId(id : any){
    console.log(id)
    this.router.navigate(["updateuser" , id])
    this.id.emit(id)

  }

  createUser(){
    this.submitted = true
    // this.modelshow = false
    console.log(this.addEmpForm.value,'form value------')
    console.log(this.addEmpForm.value)
    this._service.create(this.addEmpForm.value).subscribe((response)=>{
      // console.log(response,'createdata------')
      this.result1 = response.data
      // console.log(this.result1,'result-----')
      this.status = response?.status
      console.log(this.status,'status---')
                if(this.status === 200){
                  this.submitted = false
                  // this.modelshow = false
                  
                }else{

                }

    })
    
  }

  updateUser(){
    this.router.navigate(['updateuser/:id'])
    // console.log(id)
    // this._service.update(this.updateEmpForm.value).subscribe((resp)=>{
      // console.log(resp,'resp-------')

    // })
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getUser();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUser();
  }

}
