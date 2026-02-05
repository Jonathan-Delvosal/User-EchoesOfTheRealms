import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoadingService } from '../../Services/loading-service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeroService } from '../../Services/hero-service';

@Component({
  selector: 'app-charger',
  imports: [RouterModule, CommonModule, CardModule],
  templateUrl: './charger.html',
  styleUrl: './charger.scss'
})
export class Charger {


  _loadServ = inject(LoadingService)
  _heroServ = inject(HeroService)
  _router = inject(Router)

  pcSheets = this._loadServ.pcSheets;

  constructor() {

    this._loadServ.loadPCSheets();
  }

  onclick(id: number) {
      this._heroServ.loadPCSheet(id);
      this._router.navigate(['/menu','monde']);
  }

}
