

import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "../firebase-service/firebase.service";
import has = Reflect.has;

@Component({
  templateUrl: './create-thread.component.html'
})
export class CreateThreadComponent implements OnInit{
  threadTitle: string;
  threadCategory : string;
  listOfHash : string [] = [];

  isSwitch = false;
  listOfCategory = ["movie","soal"];
  threadContent: string;


  constructor(private firebaseService : FirebaseService){}


  ngOnInit(): void {

  }


  addHashtag(value: string) {
    this.listOfHash.push(value);
    console.log('addHashtag');
  }

  deleteHash(idx: number) {
    this.listOfHash.splice(idx,1);
  }


  clearForm(form : any , hashtagInput : any){
    this.listOfHash = [];
    form.reset();
    hashtagInput.value = "";
  }
  postThread(form : any , hashtagInput : any) {
     let data = {
        title  : this.threadTitle,
        category : this.threadCategory,
        hashtags : this.listOfHash,
        content  : this.threadContent
     };
     this.firebaseService.pushData(data,
       (msg)=>{
         console.log(msg);
         this.clearForm(form,hashtagInput);
     },(error)=>{
         console.log(error);
     });
  }

  switchCat() {

    if(!this.isSwitch){
      this.isSwitch = true;
    }else{
      this.isSwitch = false;
    }

    console.log(this.isSwitch);

  }
}
