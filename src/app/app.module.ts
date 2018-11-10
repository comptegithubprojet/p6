import { ListSpotService } from './../services/list-spot.service';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListSpotPage } from './../pages/list-spot/list-spot';
import { SignleViewPage } from './../pages/signle-view/signle-view';

import { GoogleMaps } from '@ionic-native/google-maps';
import { MapsPage } from '../pages/maps/maps';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { RecherchePage } from '../pages/recherche/recherche';
import { RechercheresultatsPage } from '../pages/rechercheresultats/rechercheresultats';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignleViewPage,
    ListSpotPage,
    MapsPage,
    RecherchePage,
    RechercheresultatsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignleViewPage,
    ListSpotPage,
    MapsPage,
    RecherchePage,
    RechercheresultatsPage,
    TabsPage
  ],
  providers: [
    ListSpotService,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
