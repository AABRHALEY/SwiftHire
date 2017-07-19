import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from "@angular/router";
import { AuthHttp } from 'angular2-jwt';
import { Http} from '@angular/http'

@Component({
  selector: 'app-announcmentpost',
   template: `
  <button (click)="getEvent()">GetAnnouncement</button> <br>
   <div class="vertical-menu" *ngIf="formCondition">
 
        <ul>
             <li class="list-group-item" *ngFor="let obj of jobs"> {{jobs.name}}<span class="pull-right"></span>
        <p><b>Description :</b> {{ obj.description }} <br> </p>
        <p><b>Category :</b> {{obj.category }} <br> </p>
        <p><b>Type :</b> {{obj.type }} <br> </p>
        <p><b>Lon :</b> {{obj.location[0] }} <br> </p>
        <p><b>Lat :</b> {{obj.location[1] }} <br> </p>
        <p><b>Hourly Fee :</b> {{obj.hourlyfee }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[0] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[1] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[2] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[3] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[4] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[5] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Preferred Date :</b> {{obj.preferredDate[6] | date:"MM/dd/yy" }} <br> </p>
        <p><b>Start Date :</b> {{obj.startDate | date:"MM/dd/yy" }} <br> </p>
        <p><b>End Date :</b> {{obj.endDate | date:"MM/dd/yy" }} <br> </p>
        <p><b>Work Hours :</b> {{obj.workHours | date:"MM/dd/yy" }} <br> </p>
             </li>
        </ul>
        </div>
    
   <button (click)="addEvent()">AddNewAnnouncement</button> <br>
   <div class="vertical-menu" *ngIf="myformCondition">

<form [formGroup]="myForm" (ngSubmit)="submitForm(myForm)" class="form-horizontal">

    <label for="post" >Post Announcemnet</label><br>
    
     <div>
       <label for = "name">name</label><br/>
       <input type = "text"  #name
           formControlName = "name">
           <div *ngIf = "!myForm.controls['name'].valid"><span style='color:red;font-size:10px'>Required</span></div>
    </div>

     <div>
    <label for = "Description">Description</label><br/>
    <input type = "text"
           formControlName = "description">
           <div *ngIf = "!myForm.controls['description'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

   <div>
    <label for = "category">Category</label><br/>
    <input type = "text"
           formControlName = "category">
           <div *ngIf = "!myForm.controls['category'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

   <div>
    <label for = "type">Type</label><br/>
    <input type = "text"
           formControlName = "type">
           <div *ngIf = "!myForm.controls['type'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

   <div>
    <label for = "Loction">Location</label><br/>
    <input type = "text"
           formControlName = "location">
           <div *ngIf = "!myForm.controls['location'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

   <div>
    <label for = "Hourly fee">Hourly fee</label><br/>
    <input type = "text"
           formControlName = "hourlyfee">
           <div *ngIf = "!myForm.controls['hourlyfee'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

   <div>
    <label for = "Preferred Date">Preferred Date</label><br/>
    <input type = "text"
           formControlName = "preferredDate">
           <div *ngIf = "!myForm.controls['preferredDate'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

  <div>
    <label for = "Start Date">Start Date</label><br/>
    <input type = "text"
           formControlName = "startDate">
           <div *ngIf = "!myForm.controls['startDate'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

  <div>
    <label for = "End Date">End Date</label><br/>
    <input type = "text"
           formControlName = "endDate">
           <div *ngIf = "!myForm.controls['endDate'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

<div>
    <label for = "Work hours">Work Hours</label><br/>
    <input type = "text"
           formControlName = "workHours">
           <div *ngIf = "!myForm.controls['workHours'].valid"><span style='color:red;font-size:10px'>Required</span></div>
  </div>

  <div>
    <label for="comments" >Post Comments</label><br>
    <textarea name="comments" type="text" [formControl]="myForm.controls['comments']" class="form-control" rows="5"></textarea>
    <div *ngIf="!myForm.controls['comments'].valid">Minimum Length 10</div><br>
  </div>
    <input type="submit" value="Post"  class = "btn btn-primary" [disabled]="!myForm.valid" />

  </form>
</div>
  
  `,
  styles: []
})
export class AnnouncmentpostComponent {
myformCondition=false;
formCondition=false;
announcments:any[];
data=""
jobname="";
announcmentdata;
  dataForm:FormGroup;
  myForm: FormGroup;
  apiService;
  constructor(private http: Http,private activatedRoute: ActivatedRoute,fb: FormBuilder, apiService: ApiService,router:Router) {
    this.apiService = apiService;
    this.myForm = fb.group({
      post: ['', Validators.compose([Validators.required, this.validatePost])],
      name :['', Validators.required],
      description: ['', Validators.required],
      category : ['', Validators.required],
      type : ['',Validators.required],
      location: ['', Validators.required],
      hourlyfee:['$', Validators.required],
      preferredDate:['', Validators.required],
      startDate: ['', Validators.required],
      endDate:['', Validators.required],
      workHours:['',Validators.required]
    });

// activatedRoute.queryParams.subscribe(
//       (param: any) => {this.data = param['data']
//       console.log(this.data);});

//     this.announcments = JSON.parse(this.data).announcments;
//     this.jobname=JSON.parse(this.data).clubname;
//     console.log(this.jobname);
}
  
   addEvent() {
    console.log("reached");
    this.myformCondition = true;
  }
  getEvent() {
    console.log("reached");
    this.formCondition = true;
  }


   submitForm(form) {     
 this.announcmentdata={
      "name": this.myForm.value.post,
      "description": this.myForm.value.post,
      "category": this.myForm.value.post,
      "type": this.myForm.value.post,
      "location": this.myForm.value.post,
      "hourlyfee": this.myForm.value.post,
      "preferredDate": this.myForm.value.post,
      "startDate": this.myForm.value.post,
      "endDate": this.myForm.value.post,
      "workHours": this.myForm.value.post,
       //"owner": JSON.parse(localStorage.getItem('profile')).name
    }
    console.log(JSON.parse(localStorage.getItem('profile')).name);    
     this.myformCondition = false;    
    this.apiService.postData("http://localhost:4000/jobs", this.announcmentdata).subscribe(data => {console.log(data);
      this.announcments.push(this.announcmentdata)},
      (err)=>console.log(err) );
  }

  
  validatePost(control: FormControl) {
    if (control.value.Length < 10) {
      console.log('valid');
      return { 'invalid': true };
    }
    return null;
  }
jobs : any[];
  ngOnInit() {
    console.log(localStorage.getItem('profile'));
    //this.apiService.getData('http://localhost:4000/jobs')
    //this.authHttp.get('http://localhost:4000/jobs')
    this.apiService.getData('http://localhost:4000/jobs')
      //.map(res => res.json())
      .subscribe(
        (response)=>{
          this.jobs = response.json().jobs
          console.log(this.jobs)
          
        }
        //users => {this.users = users;console.log(users)},
        //error => console.log(error)
      );
  }

}
