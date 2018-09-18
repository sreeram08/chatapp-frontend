import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/userModule/user.module';
import { ChatModule } from './chat/chatModule/chat.module';
// import { SharedModule } from './shared/shared/shared.module';

//for routing
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';

//for Http service
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FirstCharComponent } from './shared/first-char/first-char.component';
// import { UserDetailsComponent } from './shared/user-detials/user-detials.component';

@NgModule({
  declarations: [
    AppComponent
    // ForgotPasswordComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ChatModule,
    UserModule,
    // SharedModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: LoginComponent },
      { path: "*", component: LoginComponent }
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
