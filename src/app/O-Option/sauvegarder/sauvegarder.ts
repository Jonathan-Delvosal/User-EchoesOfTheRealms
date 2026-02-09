import { Component, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroService } from '../../Services/hero-service';
import { LoadingService } from '../../Services/loading-service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PCSheet } from '../../models/PCSheet';
import { SaverService } from '../../Services/saver-service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Button } from "primeng/button";

@Component({
  selector: 'app-sauvegarder',
  imports: [RouterModule, CommonModule, CardModule, Button],
  templateUrl: './sauvegarder.html',
  styleUrl: './sauvegarder.scss'
})
export class Sauvegarder {

  private _SaveServ = inject(SaverService);
  private _heroServ = inject(HeroService);
  private _router = inject(Router);

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  pcSheets: PCSheet | null = null;

  constructor() {
    effect(() => {
      this.pcSheets = this._heroServ._pcSheet();
    })
  }

  onclick(event: Event, sheet: PCSheet) {

    console.log(42);
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voulez vous sauvegarder votre personnage ?',
      header: 'Sauvegarder',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Annuler',
      rejectButtonProps: {
        label: 'Annuler',
        severity: 'danger',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Sauvegarder',
        severity: 'success',
        outlined: true
      },

      accept: () => {
        this._SaveServ.savePCSheet(sheet).subscribe(() => {

          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Personnage sauvegardé' });
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  // onclick(sheet: PCSheet): void {
  //   this._SaveServ.savePCSheet(sheet).subscribe(() => {

  //   })
  // }

}
