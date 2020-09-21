import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatService } from './services/chat.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatInterfaceComponent,
    LoginComponent,
    
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
