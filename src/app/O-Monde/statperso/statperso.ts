import { Component, computed, inject } from '@angular/core';
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

  pcSheet = this._heroService.pcSheet;

  HpMax = computed(() => (this.pcSheet()?.hpMax ?? 0));

  ManaMax = computed(() => (this.pcSheet()?.manaMax ?? 0));

  ResFire = computed(() => (this.pcSheet()?.resFire ?? 0));
  ResIce = computed(() => (this.pcSheet()?.resIce ?? 0));
  ResLightning = computed(() => (this.pcSheet()?.resLightning ?? 0));

}
