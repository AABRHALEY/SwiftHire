// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
// import { ApiService } from '../services/api.service';

// import { AuthHttp } from 'angular2-jwt';
// import 'rxjs/add/operator/map';
// @Component({
//   selector: 'app-memberdetails',
//   template: `
//   <h2>User Details Page</h2>
// <ul>
//                     <li class="list-group-item" *ngFor="let member of userDetails"> 
//                     name:{{member.name}}<span class="pull-right"> </span><br>
//                      Email:{{member.email}}<span class="pull-right"> </span>
//                     <div class="container">
//                    <img src={{member.picture}} class="img-rounded" alt="Cinque Terre" width="100" height="70">
// </div>
                    
//                     </li>
                    
//     </ul>
//   `,
//   styles: []
// })
// export class MemberdetailsComponent  {
// data;names;
// members:any[];
// userDetails;

//   constructor(private activatedRoute: ActivatedRoute,public _service: ApiService) { 

// activatedRoute.queryParams.subscribe(
//       (param: any) => {this.data = param['club']
//       console.log("entered");
//       this.members= JSON.parse(this.data).memeber;
//     this.names={
//      name:this.members
//    }
//       console.log(this.members+" this are members list");
//       })
//   this._service.postData("http://localhost:4000/users",this.names).subscribe(data => {console.log(data+"this is from subcribe")
// this.userDetails=data.json()
// for(let user of data.json()){
//   console.log(user.picture);
// }  
// },
//       (err)=>console.log(err) );
//   }
//  }
