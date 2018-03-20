import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { SidebarModule } from 'primeng/sidebar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginFormComponent } from './login/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { EventService } from './services/event.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';


const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    canActivate: [AuthguardGuard],
    children: [
      {
        path: 'map',
        component: MapComponent
      },

    ]
  },

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    LoginComponent,
    PageNotFoundComponent,
    MapComponent,
    SidebarComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ToolbarModule,
    FormsModule,
    DialogModule,
    OverlayPanelModule,
    HttpClientJsonpModule,
    SplitButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCLK3i1TBLm_tUGc0_OkRFmAlih6GWBqo'
    }),
    AgmSnazzyInfoWindowModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    InputTextModule
    //BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    EventService,
    UserService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
