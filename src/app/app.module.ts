import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {LeftComponent} from "./left-component/left.component";
import {RightComponent} from "./right-component/right.component";
import {ListThreadComponent} from "./list-thread/list-thread.component";
import {AppRoutingModule} from "./app-routing.module";
import {CreateThreadComponent} from "./create-thread/create-thread.component";
import {FormsModule} from "@angular/forms";
import {FirebaseService} from "./firebase-service/firebase.service";
import {DetailThreadComponent} from "./detail-thread/detail-thread.component";

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    ListThreadComponent,
    CreateThreadComponent,
    DetailThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [AngularFireDatabase , FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
