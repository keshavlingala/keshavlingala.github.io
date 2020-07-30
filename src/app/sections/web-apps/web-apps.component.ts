import {Component, OnInit, Inject} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {WebApp} from '../../DataModels/webapp.model';

@Component({
  selector: 'app-web-apps',
  templateUrl: './web-apps.component.html',
})
export class WebAppsComponent implements OnInit {
  myApps: WebApp[];

  constructor(private afs: AngularFirestore) {
  }


  ngOnInit() {
    this.afs.collection<WebApp>('WebApps').valueChanges().subscribe(res => {
      this.myApps = res;
    });

  }

  plusLike(card: WebApp) {
    this.afs.collection('WebApps').doc(card.id).update({
      likes: card.likes + 1
    }).then(() => {
      // this.toastr.success('Liked ' + card.name, 'Thanks😊');
    });
  }

  href(visit: string) {
    window.open(visit);
  }
}
