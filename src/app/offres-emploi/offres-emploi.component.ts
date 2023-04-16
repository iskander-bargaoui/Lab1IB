import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listEmploi: Emploi[] = [
    {reference:'RFx01',titre: 'Cloud Engineer',entreprise:'oreedoo',etat:true},
    {reference:'RFx02',titre: 'Dev Engineer',entreprise:'actia',etat:false},
    {reference:'RFx03',titre: 'Network Engineer',entreprise:'topnet',etat:true}
  ];
  
  constructor() {
  }
 NombreOffres=0;
   ngOnInit(): void {
   }

  // Fonction pour le calcul des offres non cloturés

  calculerBilan() {
    this.NombreOffres=this.listEmploi.filter( emploi => {
    if (emploi.etat==true)
      return true;
    else
      return false;
  }).length;
    console.log(this.NombreOffres);
    alert(`Nombre d'offres d'emploi non clôturées : ${this.NombreOffres}`);
  }
  
  // Fonction de recherche par entreprise
  searchText="";
}
