import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeroService } from '../../Services/hero-service';
import { LoadingService } from '../../Services/loading-service';
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
  private _router = inject(Router);

  pcSheets = this._loadServ.pcSheets;

  constructor() {
    this._loadServ.loadPCSheets();
  }

  onclick(sheet: PCSheet): void {
    this._heroServ.loadPCSheet(sheet);
    this._router.navigate(['/menu', 'monde', 'map']);
  }

}
