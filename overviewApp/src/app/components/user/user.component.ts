import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private uService:UserService) { }

  ngOnInit(): void {
  }
  body = {
      "email": "m.nonnis@h2app.it",
      "password": "H2App2022"
    }
  token:any
  users:any
  isLogged = false  
  getU(){
    this.uService.getUsers().subscribe(res=>{
      console.log(res)
      this.users = res.data
    })
  }
  logIn(){

    this.uService.postLogIn(this.body).subscribe((res)=>{
      console.log(res);
      this.token = res.data.token
      this.uService.token = this.token
      this.isLogged = true
    })
  }
}
