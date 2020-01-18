import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  private _isLoggedIn;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private  snackbar: MatSnackBar
  ) {
    this.user$ = this.afAuth.user;
    this.user$.subscribe(user => {
      if (user) {
        this._isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('uid', JSON.stringify(user.uid));
      } else {
        this._isLoggedIn = false;
        localStorage.clear();
      }
    });
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this._isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('uid', JSON.stringify(user.uid));
      } else {
        this._isLoggedIn = false;
        localStorage.clear();
      }
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  async signout() {
    this._isLoggedIn = false;
    return this.afAuth.auth.signOut();
  }

  async signInWithEmail(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }


}
