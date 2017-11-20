

import {Injectable} from "@angular/core";
import {AngularFireDatabase, SnapshotAction} from "angularfire2/database";
import {Observable} from "rxjs/Observable";


@Injectable()
export class FirebaseService{
  constructor(private firebaseDatabase : AngularFireDatabase){}



  pushComments(data : any , callbackOk : ()=>void){
    this.firebaseDatabase
      .list('/threads-comments/'+data.key)
      .push(data.comment)
      .then((o)=>{
          callbackOk();
      },(e)=>{
          console.log(e);
      });
  }

  getComments(key : string){
    return this.firebaseDatabase
      .list('/threads-comments/'+key)
      .valueChanges()
  }


  getPost(key : string){
    return this.firebaseDatabase
      .list(`/threads/${key}`)
      .valueChanges()
  }

  searchByCategory(category : string) : Observable<SnapshotAction[]>{
    return this.firebaseDatabase
        .list('/threads',(ref)=>(
          ref.orderByChild('/category').equalTo(category)
        ))
        .snapshotChanges()
  }


  pushData
          (
           data : any ,
           callbackSuccess : (msg : string ) => void ,
           callbackError : (msg : string) => void
          )
  {
    this.firebaseDatabase.list('/threads')
      .push(data)
      .then((onFulfilled)=>{
          callbackSuccess("push data Success");
      },(onError)=>{
          callbackError("push data error");
          console.log(onError);
      });
  }

  allSnapshots(){
    return this.firebaseDatabase.list('/threads').snapshotChanges()
  }

}
