import { Component, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroService } from '../../Services/hero-service';
import { LoadingService } from '../../Services/loading-service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PCSheet } from '../../models/PCSheet';
import { SaverService } from '../../Services/saver-service';

@Component({
  selector: 'app-sauvegarder',
  imports: [RouterModule, CommonModule, CardModule],
  templateUrl: './sauvegarder.html',
  styleUrl: './sauvegarder.scss'
})
export class Sauvegarder {

  private _SaveServ = inject(SaverService);
  private _heroServ = inject(HeroService);
  private _router = inject(Router);

  pcSheets: PCSheet | null = null;

  constructor() {
    effect(() => {
      this.pcSheets = this._heroServ._pcSheet();
    })
  }

  onclick(sheet: PCSheet): void {
    this._SaveServ.savePCSheet(sheet);
  }

}
