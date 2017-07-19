import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-members',
  template: `
  <div>
    <h2>Users Page</h2>
    
    <ul>
      <li *ngFor="let user of users">
       <b>Image</b> <img [src]="user.image">
        
      <p><b>Name :</b>      {{user.name}} <br> </p>
      <p><b>User name :</b> {{user.username}} <br></p>
      <p><b>Email :</b>     {{user.email}} <br></p>
      <p><b>City :</b>      {{user.address.city}} <br></p>
      <p><b>Zipcode :</b>   {{user.address.zipcode}} <br></p>
      <p><b>Lat :</b>       {{user.address.geo.lat}} <br></p>
      <p><b>Log :</b>       {{user.address.geo.lng}} <br></p>
      <p><b>Website :</b>   {{user.website}} <br></p>
      <p><b>Comments :</b>    {{user.comments}} <br></p>

      </li>
    </ul>
    </div>
  `,
  styles: []
})
export class MembersComponent implements OnInit {

  users: any[]
  constructor(private http: Http, private apiService:ApiService,private authHttp:AuthHttp) {}
  ngOnInit() {
    console.log(localStorage.getItem('profile'));
    //this.apiService.getData('http://localhost:4000/users')
    //this.authHttp.get('http://localhost:4000/users')
    this.http.get('http://localhost:4000/users')
      //.map(res => res.json())
      .subscribe(
        (response)=>{
          this.users = response.json().users
          console.log(this.users)
          
        }
        //users => {this.users = users;console.log(users)},
        //error => console.log(error)
      );
  }

}
