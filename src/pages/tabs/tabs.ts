import { RecherchePage } from './../recherche/recherche';
import { MapsPage } from './../maps/maps';
import { ListSpotPage } from './../list-spot/list-spot';

import { HomePage } from './../home/home';

import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage 
{
    homePage = HomePage;
    listSpotPage = ListSpotPage;
    mapsPage = MapsPage;
    recherchePage= RecherchePage;
}
