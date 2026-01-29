import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroService } from '../../Services/hero-service';
import { PCSheet } from '../../models/PCSheet';

@Component({
  selector: 'app-statperso',
  imports: [RouterModule],
  templateUrl: './statperso.html',
  styleUrl: './statperso.scss'
})
export class Statperso {

  _heroService = inject(HeroService)

  psSheet: PCSheet = this._heroService.pcSheet;

  

}
