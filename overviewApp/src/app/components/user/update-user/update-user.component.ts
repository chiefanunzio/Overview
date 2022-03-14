import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  user:User
  constructor(private uService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uService.retrieveUser(this.id).subscribe((res:any)=>{
      this.user = res.data;
    })
  }

}
