import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FirebaseService} from "../firebase-service/firebase.service";
import {Observable} from "rxjs/Observable";

@Component({
  templateUrl : './detail-thread.component.html'
})
export class DetailThreadComponent implements OnInit , OnDestroy{

  private  subscription : any;



  private threadContent : string = "";
  private threadTitle : string = "";
  private threadCategory : string = "" ;
  private paramKey  : string = "";
  private threadComments : any;

  constructor(private router : Router , private activeRoute: ActivatedRoute , private firebaseService : FirebaseService){}

  ngOnInit(): void {
    this.initSubcribe();
  }


  viewComments(key : string){
    this.threadComments = this.firebaseService
      .getComments(key);
  }

  pushValue(val : any){
    this.threadContent = val[1];
    this.threadCategory = val[0];
    this.threadTitle = val[3];
  }

  viewData(key : any){
    let result = this.firebaseService
      .getPost(key);

    result.subscribe((val)=>{
        this.pushValue(val);
        this.paramKey = key;
    });
  }

  initSubcribe(){
    this.subscription = this.activeRoute
      .params
      .subscribe((paramValue)=>{
          this.viewData(paramValue['id']);
          this.viewComments(paramValue['id']);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateBack(){
    this.router.navigate(['threads']);
  }

  pushComment(value: String) {
    this.firebaseService
      .pushComments({
        key : this.paramKey,
        comment : value
      },()=>{

      });
  }

}
