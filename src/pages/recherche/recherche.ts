import { RechercheresultatsPage } from './../rechercheresultats/rechercheresultats';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  public hauteurVagues: any;
  public directionVent: any;
  public forceVent: any;
  public maree: any;

  rechercheresultatsPage = RechercheresultatsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmitForm()
  {

    if(this.hauteurVagues == '2m et \+' && this.directionVent == 'Ouest')
    {
      console.log('verdon + pointe');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        pointe: "La Pointe"
      });

    }
    else if(this.hauteurVagues == '2m et \+' && this.directionVent == 'Sud')
    {
      console.log('verdon + soulac');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        soulac: "Soulac"
      });

    }
    else if(this.hauteurVagues == '2m et \+' && this.directionVent == 'Nord')
    {
      console.log('pointe');

      this.navCtrl.push(this.rechercheresultatsPage, {
        pointe: "La Pointe"
      });

    }
    else if(this.hauteurVagues == '2m et \+' && this.directionVent == 'Est')
    {
      console.log('soulac + amelie + montalivet');

      this.navCtrl.push(this.rechercheresultatsPage, {
        soulac: "Soulac",
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Ouest' && this.forceVent == 'Supérieur à 20km/h')
    {
      console.log('verdon + pointe');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        pointe: "La Pointe"
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Ouest' && this.forceVent == 'Inférieur à 20km/h')
    {
      console.log('all');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        soulac: "Soulac",
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
        hourtin: 'Hourtin',
        carcans: 'Carcans',
        lacanau: 'Lacanau',
        porge: 'Le Porge',
        grandcrohot: 'Le Grand-Crohot',
        trucvert: 'Le Truc Vert',
        horizon: 'L\'Horizon',
        pointe: "La Pointe",
        lasalie: 'La Salie'
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Sud' && this.forceVent == 'Supérieur à 20km/h')
    {
      console.log('soulac + verdon');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        soulac: "Soulac"
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Sud' && this.forceVent == 'Inférieur à 20km/h')
    {
      console.log('all (sauf la pointe)');

      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        soulac: "Soulac",
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
        hourtin: 'Hourtin',
        carcans: 'Carcans',
        lacanau: 'Lacanau',
        porge: 'Le Porge',
        grandcrohot: 'Le Grand-Crohot',
        trucvert: 'Le Truc Vert',
        horizon: 'L\'Horizon',
        lasalie: 'La Salie'
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Nord' && this.forceVent == 'Supérieur à 20km/h')
    {
      console.log('pointe');

      this.navCtrl.push(this.rechercheresultatsPage, {
        pointe: "La Pointe"
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Nord' && this.forceVent == 'Inférieur à 20km/h')
    {

      console.log('all (sauf verdon + soulac)');

      this.navCtrl.push(this.rechercheresultatsPage, {
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
        hourtin: 'Hourtin',
        carcans: 'Carcans',
        lacanau: 'Lacanau',
        porge: 'Le Porge',
        grandcrohot: 'Le Grand-Crohot',
        trucvert: 'Le Truc Vert',
        horizon: 'L\'Horizon',
        pointe: "La Pointe",
        lasalie: 'La Salie'
      });

    }
    else if (this.hauteurVagues == '50cm à 2m' && this.directionVent == 'Est')
    {
      this.navCtrl.push(this.rechercheresultatsPage, {
        soulac: "Soulac",
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
        hourtin: 'Hourtin',
        carcans: 'Carcans',
        lacanau: 'Lacanau',
        porge: 'Le Porge',
        grandcrohot: 'Le Grand-Crohot',
        trucvert: 'Le Truc Vert',
        horizon: 'L\'Horizon',
        lasalie: 'La Salie'
      });

      console.log('all (sauf verdon + pointe)');
    }
    else
    {
      this.navCtrl.push(this.rechercheresultatsPage, {
        verdon: "Le Verdon",
        soulac: "Soulac",
        amelie: 'L\'Amélie',
        montalivet: "Montalivet",
        hourtin: 'Hourtin',
        carcans: 'Carcans',
        lacanau: 'Lacanau',
        porge: 'Le Porge',
        grandcrohot: 'Le Grand-Crohot',
        trucvert: 'Le Truc Vert',
        horizon: 'L\'Horizon',
        pointe: "La Pointe",
        lasalie: 'La Salie'
      });
    }

  }

}
