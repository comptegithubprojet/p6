import { SurfSpot } from './../../models/SurfSpot.model';
import { SignleViewPage } from './../signle-view/signle-view';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListSpotService } from '../../services/list-spot.service';

@IonicPage()
@Component({
  selector: 'page-list-spot',
  templateUrl: 'list-spot.html',
})
export class ListSpotPage implements OnInit 
{

  spotsList: SurfSpot[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private listSpotService: ListSpotService) 
  {
  }

  ngOnInit()
  {
    this.spotsList = this.listSpotService.spotsList.slice();
  }

  onLoadSpot(spot: SurfSpot)
  {
    this.navCtrl.push(SignleViewPage, {spot: spot});
  }

}
