import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroService } from '../../Services/hero-service';

@Component({
  selector: 'app-perso',
  imports: [RouterModule],
  templateUrl: './perso.html',
  styleUrl: './perso.scss'
})
export class Perso {

  private hero = inject(HeroService);

  rest = () => this.hero.rest();

}
