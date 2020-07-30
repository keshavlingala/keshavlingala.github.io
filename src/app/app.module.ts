import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ProfileComponent} from './profile/profile.component';
import {WebAppsComponent} from './sections/web-apps/web-apps.component';
import {AndroidAppsComponent} from './sections/android-apps/android-apps.component';
import {BluetoothComponent} from './sections/bluetooth/bluetooth.component';
import {LineFollowerComponent} from './sections/line-follower/line-follower.component';
import {CrawlerComponent} from './sections/crawler/crawler.component';
import {FirebaseModule} from './firebase/firebase.module';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WebAppsComponent,
    AndroidAppsComponent,
    BluetoothComponent,
    LineFollowerComponent,
    CrawlerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FirebaseModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
