import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatStateService } from '../../Services/combat-state-service';

@Component({
  selector: 'app-encounter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encounter.html',
  styleUrl: './encounter.scss'
})
export class Encounter {
  private combat = inject(CombatStateService);

  monster = this.combat.monster; // computed
}
