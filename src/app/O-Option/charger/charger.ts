import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

import { HeroService } from '../../Services/hero-service';
import { LoadingService } from '../../Services/loading-service';
import { CharacterApiService } from '../../Services/character-apiservice';

import { PCSheet } from '../../models/PCSheet';

@Component({
  selector: 'app-charger',
  imports: [RouterModule, CommonModule, CardModule],
  templateUrl: './charger.html',
  styleUrl: './charger.scss'
})
export class Charger {

  private _loadServ = inject(LoadingService);
  private _heroServ = inject(HeroService);
  private _charApi = inject(CharacterApiService);
  private _router = inject(Router);

  pcSheets = this._loadServ.pcSheets;

  constructor() {
    this._loadServ.loadPCSheets();
  }

  onclick(sheet: PCSheet): void {
    // Optionnel : reset l'état avant de recharger
    this._heroServ.clear();

    this._charApi.getPCResolved(sheet.id).subscribe({
      next: resolved => {
        this._heroServ.load(resolved);
        this._router.navigate(['/menu', 'monde', 'map']);
      },
      error: err => {
        console.error('Erreur chargement fiche résolue:', err);
        alert("Impossible de charger la fiche personnage. Vérifie ta connexion / ton token.");
      }
    });
  }
}
