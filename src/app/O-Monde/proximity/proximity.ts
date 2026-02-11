import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-proximity',
  imports: [RouterModule],
  templateUrl: './proximity.html',
  styleUrl: './proximity.scss'
})
export class Proximity {


  _client = inject(HttpClient)

  monsters: any[] = [];

  constructor() {
    this.runRandomLoop();    
  }

  runRandomLoop(): void {
      const randomCount = Math.floor(Math.random() * 10) + 1; 

      for(let i = 0; i <randomCount; i++) {
      this?._client.get(environment.ApiUrl +'/monster/RandomLevel?lvlMin=1&lvlMax=5').subscribe(data => this.monsters.push(data))
    }
}


}
