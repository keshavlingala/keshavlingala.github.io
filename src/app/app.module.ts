import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {
  MatButtonModule, MatCardModule,
  MatDividerModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule, MatSnackBarModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {AngularFireModule} from '@angular/fire';
import {WebAppsComponent} from './Sections/web-apps/web-apps.component';
import {AndroidAppsComponent} from './Sections/android-apps/android-apps.component';
import {BluetoothComponent} from './Sections/bluetooth/bluetooth.component';
import {LineFollowerComponent} from './Sections/line-follower/line-follower.component';
import {CrawlerComponent} from './Sections/crawler/crawler.component';
import {SettingsComponent} from './admin/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WebAppsComponent,
    AndroidAppsComponent,
    BluetoothComponent,
    LineFollowerComponent,
    CrawlerComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatExpansionModule,
    MatTabsModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence({
      synchronizeTabs: true
    }),
    MatProgressSpinnerModule,
    AngularFireAuthModule,
    MatDividerModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
