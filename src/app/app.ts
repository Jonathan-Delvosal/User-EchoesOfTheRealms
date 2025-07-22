import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './banner/banner';
import { MenuPrincipale } from './menu-principale/menu-principale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, MenuPrincipale],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EotR: QuestSharp');
}
