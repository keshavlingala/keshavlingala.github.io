import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebAppsComponent} from './sections/web-apps/web-apps.component';
import {AndroidAppsComponent} from './sections/android-apps/android-apps.component';
import {ProfileComponent} from './profile/profile.component';
import {BluetoothComponent} from './sections/bluetooth/bluetooth.component';
import {LineFollowerComponent} from './sections/line-follower/line-follower.component';
import {CrawlerComponent} from './sections/crawler/crawler.component';


const routes: Routes = [
  {path: 'web', component: WebAppsComponent},
  {path: 'android', component: AndroidAppsComponent},
  {path: 'line-follower', component: LineFollowerComponent},
  {path: 'crawler-robot', component: CrawlerComponent},
  {path: 'bluetooth-robot', component: BluetoothComponent},
  {path: '', component: ProfileComponent},
  // {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
