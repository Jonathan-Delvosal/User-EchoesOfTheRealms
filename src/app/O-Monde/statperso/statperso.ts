import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HeroService } from '../../Services/hero-service';

@Component({
  selector: 'app-statperso',
  imports: [RouterModule],
  templateUrl: './statperso.html',
  styleUrl: './statperso.scss'
})
export class Statperso {

  _heroService = inject(HeroService)

  Character: string = this._heroService.Character;

  

}
