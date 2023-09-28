import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent {

  id : any
  @Input() id1 : any 
  constructor(
    private actRoute:ActivatedRoute
  ){
    // let id = this.actRoute.snapshot.paramMap.get('id');
    // console.log(id,'id----')

    console.log(this.id1)

    this.actRoute.params.subscribe((param : Params)=>{
      this.id = param['id']
      console.log(this.id)
    })
  }

}
