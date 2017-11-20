import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {ListThreadComponent} from "./list-thread/list-thread.component";
import {CreateThreadComponent} from "./create-thread/create-thread.component";
import {DetailThreadComponent} from "./detail-thread/detail-thread.component";


const appRoutes : Routes =[
  {path : "threads",component : ListThreadComponent},
  {path : "create-thread",component : CreateThreadComponent},
  {path : "detail-thread/:id",component : DetailThreadComponent},
  {path : "**",redirectTo : "/"}
];

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
