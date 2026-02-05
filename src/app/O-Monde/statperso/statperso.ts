import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../Services/hero-service';

@Component({
  selector: 'app-statperso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './statperso.html',
  styleUrls: ['./statperso.scss']
})
export class Statperso {

  private hero = inject(HeroService);

  identity = this.hero.identity;
  job = this.hero.job;

  HpMax = this.hero.HpMax;
  ManaMax = this.hero.ManaMax;

  Str = this.hero.Str;
  Dex = this.hero.Dex;
  Intel = this.hero.Intel;

  ResFire = this.hero.ResFire;
  ResIce = this.hero.ResIce;
  ResLightning = this.hero.ResLightning;
}
