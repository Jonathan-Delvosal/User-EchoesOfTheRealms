import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatStateService } from '../../Services/combat-state-service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './fight.html',
  styleUrl: './fight.scss'
})
export class Fight {
  private combat = inject(CombatStateService);

  attack(id: number) {
    this.combat.attack(id);
  }
}
