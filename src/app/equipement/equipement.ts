import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AffichEquip } from '../affich-equip/affich-equip';

@Component({
  selector: 'app-equipement',
  imports: [RouterModule, AffichEquip],
  templateUrl: './equipement.html',
  styleUrl: './equipement.scss'
})
export class Equipement {

}
