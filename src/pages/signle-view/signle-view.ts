import { ListSpotService } from './../../services/list-spot.service';
import { SurfSpot } from './../../models/SurfSpot.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-signle-view',
  templateUrl: 'signle-view.html',
})
export class SignleViewPage implements OnInit 
{
  index: number;
  spot: SurfSpot;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private listSpotService: ListSpotService,
              private launchNavigator: LaunchNavigator) 
  {
  }

  ngOnInit()
  {
    this.spot = this.navParams.get('spot');
  }

  navme(adresse)
  {
    this.launchNavigator.navigate(adresse);
  }

}
