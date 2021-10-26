import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

class Post {
  id: string;
  name: string;
  status: string;
  constructor() {}
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ToDoListItems: Observable<any>; //FirebaseListObservable<any[]>;
  post: Post = new Post();
  newItem = '';
  postid: any;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider,privat