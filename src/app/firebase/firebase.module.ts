import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule, FirebaseOptions} from '@angular/fire';
import {environment} from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // @ts-ignore
    AngularFireModule.initializeApp(environment.firebase as FirebaseOptions),
    AngularFirestoreModule,
  ]
})
export class FirebaseModule {
}
