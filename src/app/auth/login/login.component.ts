import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{

  // @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;
  @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;

  otpPage = false
  loginpage = true
  responsedata:any
  getOtp:any;
  status:any
  message:any;
  errorMsg:any
  mobileNumber:any
  submitted = true;
 
  splitOtp:any
  loginForm: FormGroup;
  otptForm:FormGroup
  setMobile:any;

  

  verifyMsg:any;
  verifyAuthKey:any;
  verifyStatus:any
  conditionVerifyStatus:boolean = false
  verifyResponseData:any
  message1: any;
  message2: any;




  constructor(private fb:FormBuilder,private _service:AuthService,private router:Router){
    this.loginForm = this.fb.group({
      mobile_number:['',[Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10)]],  
       
    })

    this.otptForm = this.fb.group({
      mobile_number:localStorage.getItem('mobile'),
      otp:'',
    
      
    })

    
  }
  
  ngOnInit(){   
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  onSubmit(data:any){
    this.submitted = true
      this.loginpage = false
      this._service.genrateOtp(this.loginForm.value).subscribe((resp:{})=>{
        console.log('result---',resp)
        this.responsedata = resp

        this.mobileNumber = this.responsedata?.data.mobile_number
        console.log(this.mobileNumber,'mobilenumber')
        localStorage.setItem( 'mobile',this.mobileNumber)

        this.status = this.responsedata?.status;
        console.log(this.status,this.status === 200,'check status')
        if(this.status === 200){
          // alert('demo 11')
          this.otpPage = true;
        }else{
          // alert('pleaee correct number.');
          this.submitted = false;
          this.loginpage = true
        }

      
        // console.log(this.status,'status----')
        // console.log(typeof this.status,'tyoe of')
        this.message = this.responsedata.message
        console.log(this.message,'message----')

        this.message1 = this.responsedata?.data[0]
        console.log(this.message1)
        this.message2 = this.responsedata?.data[1]
        console.log(this.message2)
        
       

        this.getOtp = this.responsedata.data.otp
        const str =  this.getOtp.toString()
        this.splitOtp = str.split(',').join('\n');
        console.log(this.splitOtp,'getotp--')

        if(this.status === 200){
          this.otpPage = false

          // this.loginpage = false
          // this.otpPage = true
        }
         else{
          alert(this.status === 201)
          
        }

    })

    
    // console.log(data.value)
  
    
  }

  checkContinueBtn(status:Boolean){
    return status
  }

  verifySubmit(data:any){
    this.submitted = true
    console.log(data.value,'data---')
    this._service.verifyOtp(this.otptForm.value).subscribe((resp:{})=>{
      console.log(resp)
      this.verifyResponseData = resp
     
      this.verifyAuthKey = this.verifyResponseData.data.auth_key
      console.log(this.verifyAuthKey,'verifykey----')
      localStorage.setItem('AuthKey',this.verifyAuthKey)



      this.verifyStatus = this.verifyResponseData.status
      if(this.verifyStatus === 200){
        this.otpPage = false
        this.router.navigate(['./dashboard'])
      }
      
      // console.log(this.verifyStatus,'verifystatus----',this.verifyStatus == 200)
      // this.otpPage = false

      // if(this.verifyStatus === 201){
        // alert('dgdgd')
        // this.otpPage = true
        // alert(this.verifyStatus === 201)
      // }
      
      this.verifyMsg = this.verifyResponseData.message
      console.log(this.verifyMsg,'verifymsg---')
    })
  }

  
  // popup(){
  //   this.otpPage = false
  //   this.router.navigate(['./dashboard'])

  // }

  errorPopup(){
    this.verifyStatus = false
    this.otpPage = true    
  }

  validateNumber(control: FormControl) {
    const value = control.value;
    if (!/^\d{10}$/.test(value)) {
      return { invalidNumber: true };
    }
    return null;
  }

  ngAfterViewInit() {
    if (this.inputFields && this.inputFields.length > 0) {
      this.inputFields.first.nativeElement.focus();
    }
  }

  moveToNextField(event: any, index: number): void {
    // console.log(event,'event---')
    // console.log(index,'index----')
    if (event.target.value.length === 1 && index < this.inputFields.length - 1) {
      this.inputFields.toArray()[index + 1].nativeElement.focus();
    }
  }
}

