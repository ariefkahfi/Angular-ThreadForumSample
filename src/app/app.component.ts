import {Component, OnInit} from '@angular/core';
import {FirebaseApp} from "angularfire2";
import * as firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private af : AngularFireDatabase){

  }


  ngOnInit(): void {

  }
}
