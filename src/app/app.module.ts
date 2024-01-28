import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SquarePipe } from './core/pipes/square.pipe';
import { PersonComponent } from './components/person/person.component';
import { PersonManagementComponent } from './components/person/person-management/person-management.component';
import { FiveStarComponent } from './components/hotels/five-star/five-star.component';
import { FourStarComponent } from './components/hotels/four-star/four-star.component';
import { ThreeAboveStarComponent } from './components/hotels/three-above-star/three-above-star.component';
import { SliderConfigurationComponent } from './components/slider-configuration/slider-configuration.component';
import { TranslateComponent } from './components/translate/translate.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    SquarePipe,
    PersonComponent,
    PersonManagementComponent,
    FiveStarComponent,
    FourStarComponent,
    ThreeAboveStarComponent,
    SliderConfigurationComponent,
    TranslateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
