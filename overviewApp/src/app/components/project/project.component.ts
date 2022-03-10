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
  

  projects:Project[]=[]
  
  getProject(): void {
    this.service.getProject().subscribe((res) => {
      
      this.projects = res.data
      
    })
  }

  ngOnInit() {
    
  }

}
  

