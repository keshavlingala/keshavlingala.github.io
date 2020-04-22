import {Component, OnInit} from '@angular/core';
import {AndroidApp} from '../../DataModels/androidApp.model';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {SubSink} from 'subsink';
import {WebApp} from '../../DataModels/webapp.model';
import {Achievement} from '../../DataModels/achievement.model';
import {AngularFireStorage} from '@angular/fire/storage';
import {CompressorService} from '../../compressor.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  $android: Observable<AndroidApp[]>;
  $webApps: Observable<WebApp[]>;
  $achievements: Observable<Achievement[]>;
  subs = new SubSink();
  androidEdit: AndroidApp;
  selectedFile: File;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private comp: CompressorService
  ) {

  }

  resetForm() {
    this.androidEdit = {
      id: null,
      title: '',
      img: '',
      description: '',
      about: '',
      likes: 0
    };
  }

  ngOnInit() {
    this.resetForm();
    this.$android = this.afs
      .collection<AndroidApp>('AndroidApps')
      .snapshotChanges().pipe(
        map(docs => {
          return docs.map(doc => {
            return {
              ...doc.payload.doc.data(),
              id: doc.payload.doc.id
            } as AndroidApp;
          });
        })
      );
  }

  editMe(app: AndroidApp) {
    console.log(this.androidEdit);
    console.log('Editing Mode');
    this.afs.collection<AndroidApp>('AndroidApps').doc<AndroidApp>(app.id).get().subscribe(res => {
      this.androidEdit = res.data() as AndroidApp;
      this.androidEdit.id = res.id;
      console.log(this.androidEdit);
    });

  }

  picChange(event) {
    const file = event.target.files[0] as File;
    this.selectedFile = file;
    console.log('File Set Success');
    console.log(file);
  }

  async submit() {
    console.log(this.androidEdit);
    if (this.androidEdit.id) {
      console.log('Edited Old App');
      await this.afs.collection('AndroidApps').doc(this.androidEdit.id).update(this.androidEdit);
      return this.resetForm();
    }
    console.log(this.androidEdit);
    console.log('New App');
    // const doc = await this.afs.collection('AndroidApps').add(this.androidEdit);
    // this.afs.collection('AndroidApps').doc(doc.id).update({
    //   id: doc.id
    // });

    // Upload Image
    if (this.selectedFile) {
      this.comp.compress(this.selectedFile).subscribe(file => {
        console.log(file);
      });
    }
    return this.resetForm();
  }

  async deleteMe(app: AndroidApp) {
    if (confirm('Do you want to delete App')) {
      try {
        await this.storage.storage.refFromURL(app.img).delete();
      } catch (e) {
        console.log(e);
      }
      this.afs.collection('AndroidApps').doc(app.id).delete();
    }
  }
}
