import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MonsterState } from '../../models/MonsterState'; // ajuste chemin si besoin
import { ProximityService } from '../../Services/proximity-service';


@Component({
  selector: 'app-proximity',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './proximity.html',
  styleUrl: './proximity.scss'
})
export class Proximity {

  private _client = inject(HttpClient);
  private _prox = inject(ProximityService);

  // affichage = source partagée
  monsters = this._prox.monsters;

  constructor() {
    this.runRandomLoop();
  }

  runRandomLoop(): void {
    this._prox.clear();

    const randomCount = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < randomCount; i++) {
      this._client
        .get<MonsterState>(`${environment.ApiUrl}/monster/RandomLevel?lvlMin=1&lvlMax=5`)
        .subscribe({
          next: (data) => this._prox.addMonster(data),
          error: () => {
            // ignore ou log
          }
        });
    }
  }
}
