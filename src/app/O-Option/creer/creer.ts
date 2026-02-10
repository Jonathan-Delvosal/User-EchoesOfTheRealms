import { Component, effect, inject, Signal, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { JobService } from '../../Services/job-service';
import { JobSheet } from '../../models/JobSheet';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeroService } from '../../Services/hero-service';
import { PCSheet } from '../../models/PCSheet';
import { NewCharacterService } from '../../Services/new-character-service';

@Component({
  selector: 'app-creer',
  imports: [InputTextModule, FloatLabelModule, FormsModule, CommonModule, CardModule, ButtonModule],
  templateUrl: './creer.html',
  styleUrl: './creer.scss'
})
export class Creer {

  _job = inject(JobService)
  private _heroServ = inject(HeroService);
  private _NewCServ = inject(NewCharacterService);

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  pcSheets: PCSheet | null = null;

  constructor() {
    effect(() => {
      this.pcSheets = this._heroServ._pcSheet();
    })
  }

  name: string | undefined;

  selectedCategories: any[] = [];
  jobs!: JobSheet[] | null;

  ngOnInit() {
    this._job.loadJobSheet().subscribe(() => {
      this.jobs = this._job.Jobsheet();
    });
  }

  onclick(event: Event, id: number) {
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Voulez vous créer votre personnage ${this.name} ?`,
      header: 'Création',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Annuler',
      rejectButtonProps: {
        label: 'Annuler',
        severity: 'danger',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Créer',
        severity: 'success',
        outlined: true
      },

      accept: () => {
        this._NewCServ.newPCSheet(this.name!, id).subscribe(() => {

          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: `Personnage ${this.name} créé` });
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }



}
