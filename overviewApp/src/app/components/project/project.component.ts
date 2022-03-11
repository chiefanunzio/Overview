import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private route: Router, private service: ProjectService, private fb: FormBuilder) { }
  

  projects:Project[]=[]
  
  projectForm = this.fb.group(
    {
      name: new FormControl(''),
      status : new FormControl(''),
      start_date : new FormControl(''),
      end_date : new FormControl(''),
      progress : new FormControl(''),
      revenue : new FormControl(''),
      client_id : new FormControl(''),
      user_ids : new FormControl('')
    }
  )

  
 
  
  getProject(): void {
    this.service.getProject().subscribe((res) => {
      
      this.projects = res.data
      
    })
  }

  addProject(){
    let newProj = new Project(
      this.projectForm.controls['name'].value,
      this.projectForm.controls['status'].value,
      this.projectForm.controls['start_date'].value,
      this.projectForm.controls['end_date'].value,
      this.projectForm.controls['progress'].value,
      this.projectForm.controls['revenue'].value,
      this.projectForm.controls['client_id'].value,
      this.projectForm.controls['user_ids'].value
      )
      console.log(newProj);
      this.service.newProj = newProj
      this.service.addProject().subscribe((res) => {

        console.log(res);
        
      })
      

    }
    
  ngOnInit() {
    
  }

}
  

