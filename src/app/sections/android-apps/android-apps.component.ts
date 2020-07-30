import {Component, OnInit, Inject} from '@angular/core';
import {AndroidApp} from '../../models/androidApp.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-android',
  templateUrl: './android-apps.component.html',
})
export class AndroidAppsComponent implements OnInit {
  appcards: AndroidApp[] = [];
  loading = true;
  logoURL: Observable<string | null>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
  }


  ngOnInit() {
    this.afs.collection<AndroidApp>('AndroidApps').valueChanges().subscribe(res => {
      this.appcards = res;
    });

  }

  plusLike(card: AndroidApp) {
    this.afs.collection('AndroidApps').doc(card.id).update({
      likes: card.likes + 1
    });
  }


  share() {
    window.open('https://api.whatsapp.com/send?text=Hey Buddy Check this Website  https://keshav-lingala.firebaseapp.com/');
  }
}
