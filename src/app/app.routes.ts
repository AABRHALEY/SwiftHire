import { RouterModule, Routes } from "@angular/router";

// import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { AnnouncmentpostComponent } from './announcmentpost/announcmentpost.component';
//import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
const MY_ROUTES: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'api/users', component: MembersComponent },
   //{ path: 'api/userdetails', component: MemberdetailsComponent },
   { path: 'api/announcement', component: AnnouncmentpostComponent },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
