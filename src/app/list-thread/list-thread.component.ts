

import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "../firebase-service/firebase.service";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";

@Component({
  templateUrl  : './list-thread.component.html'
})
export class ListThreadComponent implements OnInit{


  private listOfThreads : any;

  constructor(private firebaseService : FirebaseService , private router : Router){

  }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.listOfThreads = this.firebaseService.allSnapshots()
      .map((arrValue)=>(
        arrValue.map((mapValue)=>(
          {
            key : mapValue.key,
            title : mapValue.payload.child('title').val(),
            category : mapValue.payload.child('category').val(),
            hashtags : mapValue.payload.child('hashtags').val(),
            content : mapValue.payload.child('content').val().substr(0,50) + "...."
          }
        ))
      ));
  }
  getDataByCategory(cat: string){
    this.listOfThreads = this.firebaseService
      .searchByCategory(cat)
      .map((arrValue)=>(
        arrValue.map((mapValue)=>(
          {
            key : mapValue.key,
            title : mapValue.payload.child('title').val(),
            category : mapValue.payload.child('category').val(),
            hashtags : mapValue.payload.child('hashtags').val()
          }
        ))
      ));
  }

  goDetail(key: string) {
    this.router.navigate(['detail-thread',key]);
  }




  onTitleSearch(value: string) {
    if(value === '' || value === undefined) {
      this.getData();
    }else{
      this.getDataByCategory(value);
    }
  }
}
