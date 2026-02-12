import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SaverService } from '../../Services/saver-service';
import { HeroService } from '../../Services/hero-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-sauvegarder',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './sauvegarder.html',
  styleUrl: './sauvegarder.scss'
})
export class Sauvegarder {

  private _saveServ = inject(SaverService);
  private _heroServ = inject(HeroService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  // ✅ on réutilise directement le computed du service (pas computed(computed))
  sheet = this._heroServ.sheet;

  onclick(event: Event) {
    const currentSheet = this.sheet();
    if (!currentSheet) return;

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voulez vous sauvegarder votre personnage ?',
      header: 'Sauvegarder',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Annuler',
      acceptLabel: 'Sauvegarder',

      accept: () => {
        const sheetToSave = this.sheet();
        if (!sheetToSave) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Info',
            detail: 'Aucune fiche chargée'
          });
          return;
        }

        this._saveServ.savePCSheet(sheetToSave).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Personnage sauvegardé'
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Erreur lors de la sauvegarde'
            });
          }
        });
      }
    });
  }
}
