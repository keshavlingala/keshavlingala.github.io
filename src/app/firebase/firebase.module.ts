import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [
    AngularFirestoreModule,
  ]
})
export class FirebaseModule {
}
