import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatStateService } from '../../Services/combat-state-service';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.html',
  styleUrl: './chatbox.scss'
})
export class Chatbox {
  private combat = inject(CombatStateService);
  logs = this.combat.logs;
}
