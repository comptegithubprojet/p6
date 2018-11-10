import { SurfSpot } from './../../models/SurfSpot.model';
import { SignleViewPage } from './../signle-view/signle-view';
import { ListSpotService } from './../../services/list-spot.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rechercheresultats',
  templateUrl: 'rechercheresultats.html',
})
export class RechercheresultatsPage 
{
  public verdon = null;
  public soulac = null;
  public amelie = null;
  public montalivet = null;
  public hourtin = null;
  public carcans = null;
  public lacanau = null;
  public porge = null;
  public grandcrohot = null;
  public trucvert = null;
  public horizon = null;
  public pointe = null;
  public lasalie = null;

  public spotsList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private listSpotService: ListSpotService) 
  {
    this.verdon = this.navParams.get('verdon');
    this.soulac = this.navParams.get('soulac');
    this.amelie = this.navParams.get('amelie');
    this.montalivet = this.navParams.get('montalivet');
    this.hourtin = this.navParams.get('hourtin');
    this.carcans = this.navParams.get('carcans');
    this.lacanau = this.navParams.get('lacanau');
    this.porge = this.navParams.get('porge');
    this.grandcrohot = this.navParams.get('grandcrohot');
    this.trucvert = this.navParams.get('trucvert');
    this.horizon = this.navParams.get('horizon');
    this.pointe = this.navParams.get('pointe');
    this.lasalie = this.navParams.get('lasalie');

    if(this.verdon != null)
    {
      this.verdon = this.listSpotService.spotsList[0];
      this.spotsList.push(this.verdon);
    }

    if(this.soulac != null)
    {
      this.soulac = this.listSpotService.spotsList[1];
      this.spotsList.push(this.soulac);
    }

    if(this.amelie != null)
    {
      this.amelie = this.listSpotService.spotsList[2];
      this.spotsList.push(this.amelie);
    }

    if(this.montalivet != null)
    {
      this.montalivet = this.listSpotService.spotsList[3];
      this.spotsList.push(this.montalivet);
    }

    if(this.hourtin != null)
    {
      this.hourtin = this.listSpotService.spotsList[4];
      this.spotsList.push(this.hourtin);
    }

    if(this.carcans != null)
    {
      this.carcans = this.listSpotService.spotsList[5];
      this.spotsList.push(this.carcans);
    }

    if(this.lacanau != null)
    {
      this.lacanau = this.listSpotService.spotsList[6];
      this.spotsList.push(this.lacanau);
    }

    if(this.porge != null)
    {
      this.porge = this.listSpotService.spotsList[7];
      this.spotsList.push(this.porge);
    }

    if(this.grandcrohot != null)
    {
      this.grandcrohot = this.listSpotService.spotsList[8];
      this.spotsList.push(this.grandcrohot);
    }

    if(this.trucvert != null)
    {
      this.trucvert = this.listSpotService.spotsList[9];
      this.spotsList.push(this.trucvert);
    }

    if(this.horizon != null)
    {
      this.horizon = this.listSpotService.spotsList[10];
      this.spotsList.push(this.horizon);
    }

    if(this.pointe != null)
    {
      this.pointe = this.listSpotService.spotsList[11];
      this.spotsList.push(this.pointe);
    }

    if(this.lasalie != null)
    {
      this.lasalie = this.listSpotService.spotsList[12];
      this.spotsList.push(this.lasalie);
    }

  }

  onLoadSpot(spot: SurfSpot)
  {
    this.navCtrl.push(SignleViewPage, {spot: spot});
  }

}
