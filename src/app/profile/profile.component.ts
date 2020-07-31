import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Skill} from '../models/skill.model';
import {Achievement} from '../models/achievement.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewChecked, OnDestroy {
  loading = true;
  subs: Subscription[] = [];
  interskills: Skill[] = [];
  proskills: Skill[] = [];
  beginnerskills: Skill[] = [];
  achievements: Achievement[] = [];

  constructor(private afs: AngularFirestore) {

  }


  ngOnInit() {
    const comp = (a, b) => {
      return b.progress - a.progress;
    };
    this.subs.push(this.afs.collection<Skill>('proskills').valueChanges().subscribe(pros => {
      this.proskills = pros.sort(comp);
    }));
    this.subs.push(this.afs.collection<Skill>('interskills').valueChanges().subscribe(inter => {
      this.interskills = inter.sort(comp);
    }));
    this.subs.push(this.afs.collection<Skill>('beginner').valueChanges().subscribe(beg => {
      this.beginnerskills = beg.sort(comp);
    }));
    this.subs.push(this.afs.collection<Achievement>('Achievements').valueChanges().subscribe(ach => {
      this.achievements = ach;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(i => i.unsubscribe());
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
