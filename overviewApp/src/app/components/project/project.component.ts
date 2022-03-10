import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private route:Router, private service:ProjectService) { }
  token:any

  projects:Project[]=[]
  body = {
    "email": "m.nonnis@h2app.it",
    "password": "H2App2022"
  }

  getProject(): void {
    this.service.getProject().subscribe((res) => {
      
      this.projects = res.data
      
    })
  }

  logIn(){

    this.service.postLogIn(this.body).subscribe((res)=>{
  
      this.token = res.data.token
      this.service.token = this.token
      this.getProject()
    })
  }

  ngOnInit() {
    
  }

}
  

