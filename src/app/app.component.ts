import { Component,OnInit } from '@angular/core';
import { AuthService } from './core/servcies/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  SideBarOpened:boolean=true;

  constructor(
    private authService: AuthService,
    private translate: TranslateService
    )

  

{ 
  {
    translate.setDefaultLang('en'); // Set the default language
  }
  {
  }
}


  isLoggedIn():boolean{
  return this.authService.isAuthenticatedUser();

}

  togglesSideBar(){
    this.SideBarOpened=! this.SideBarOpened

  }
}
function changeLanguage(lang: any, string: any) {
  throw new Error('Function not implemented.');
}
{
   function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
}
