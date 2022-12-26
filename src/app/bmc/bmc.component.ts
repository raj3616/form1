import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/api.service';


@Component({
  selector: 'app-bmc',
  templateUrl: './bmc.component.html',
  styleUrls: ['./bmc.component.css']
})
export class BmcComponent implements OnInit {


constructor(private service: ApiService) { }

isupdate:boolean= false;
updatinguser={
  id:'',
  name:'',
  surname:'',
  email:'',
  username:'',
  password:''
}
userlist:any = [];

  ngOnInit(): void {
    this.showuser();
  }

  addNew(data:any){
    console.log(data)
    this.service.postUser(data).subscribe(()=>{
      alert(" Inserted Successfully ")
      this.showuser();
      this.clear();
    })
  }
  showuser(){
    this.service.getUser().subscribe(( res)=>{
      this.userlist = res
    })

  }
  updateOld(){
    this.service.upadteuserbyid(this.updatinguser).subscribe(()=>{
      this.ngOnInit();
      alert(" Updated Successfully ")

      this.isupdate = false
      this.clear();
      
    })

  }
  editUser(data:any){
    this.isupdate = true
    this.updatinguser = data

  }
  deleteUser(id:number){
    this.service.deletebyid(id).subscribe(()=>{
    this.ngOnInit();
  })
  }
  clear(){
    this.updatinguser={
        id:'',
        name:'',
        surname:'',
        email:'',
        username:'',
        password:''
    }
  }

}
