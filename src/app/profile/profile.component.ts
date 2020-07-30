import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {Skill} from '../models/skill.model';
import {Achievement} from '../models/achievement.model';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewChecked, OnDestroy {
  loading = true;
  subs = new SubSink();
  interskills: Skill[] = [];
  proskills: Skill[] = [];
  beginnerskills: Skill[] = [];
  achievements: Achievement[] = [];
  panelOpenState = true;
  private assets: firebase.storage.Reference = this.afStorage.storage.ref().child('assets');

  constructor(private  afStorage: AngularFireStorage,
              private router: Router,
              private afs: AngularFirestore) {

  }


  ngOnInit() {
    const comp = (a, b) => {
      return b.progress - a.progress;
    };
    this.subs.add(this.afs.collection<Skill>('proskills').valueChanges().subscribe(pros => {
      this.proskills = pros.sort(comp);
    }));
    this.subs.add(this.afs.collection<Skill>('interskills').valueChanges().subscribe(inter => {
      this.interskills = inter.sort(comp);
    }));
    this.subs.add(this.afs.collection<Skill>('beginner').valueChanges().subscribe(beg => {
      this.beginnerskills = beg.sort(comp);
    }));
    this.subs.add(this.afs.collection<Achievement>('Achievements').valueChanges().subscribe(ach => {
      this.achievements = ach;
    }));
    setTimeout(() => this.router.navigate(['/profile']), 3);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  Logg() {
    console.log('ProSkills', this.proskills);
    console.log('Inter Skills', this.interskills);
    console.log('Beginner Skills', this.beginnerskills);
    console.log('Achievement', this.achievements);
  }

  ngAfterViewChecked() {
    this.loading = false;
  }
}
