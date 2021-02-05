import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddTutorialComponent} from './components/add-tutorial/add-tutorial.component';
import {TutorialDetailsComponent} from './components/tutorial-details/tutorial-details.component';
import {TutorialsListComponent} from './components/tutorials-list/tutorials-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {TutorialService} from './services/tutorial.service';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ProfileComponent} from './components/profile/profile.component';
import {authInterceptorProviders} from './services/auth.interceptor';
import {TokenStorageService} from './services/token-storage.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    TutorialService,
    authInterceptorProviders,
    TokenStorageService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
