import { ListSpotPage } from './../list-spot/list-spot';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  listSpotPage = ListSpotPage;
}
