import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroService } from '../Services/hero-service';

@Component({
  selector: 'app-menu-principale',
  imports: [RouterModule],
  templateUrl: './menu-principale.html',
  styleUrl: './menu-principale.scss'
})
export class MenuPrincipale {
  _heroServ = inject(HeroService);
}
