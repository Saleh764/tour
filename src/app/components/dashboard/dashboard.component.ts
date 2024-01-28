import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/servcies/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private authService: AuthService,private router:Router){

}
logout(){
  this.authService.logout();
  this.router.navigate(['/login'])
}
}
