// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {FirebaseOptions} from '@angular/fire/firebase.app.module';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAXnpykNl8hnXSMwNjfA7uxCLLVA2vROHk',
    authDomain: 'keshav-lingala.firebaseapp.com',
    databaseURL: 'https://keshav-lingala.firebaseio.com',
    projectId: 'keshav-lingala',
    storageBucket: 'keshav-lingala.appspot.com',
    messagingSenderId: '187450563062'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
