import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { JobService } from '../../Services/job-service';
import { JobSheet } from '../../models/JobSheet';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NewCharacterService } from '../../Services/new-character-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './creer.html',
  styleUrl: './creer.scss'
})
export class Creer {

  private _job = inject(JobService);
  private _newCServ = inject(NewCharacterService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private _router = inject(Router);

  name: string | undefined;
  jobs!: JobSheet[] | null;

  ngOnInit() {
    this._job.loadJobSheet().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  onclick(event: Event, id: number) {

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Voulez vous créer votre personnage ${this.name} ?`,
      header: 'Création',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Annuler',
      acceptLabel: 'Créer',

      accept: () => {
        if (!this.name) return;

        this._newCServ.newPCSheet(this.name, id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: `Personnage ${this.name} créé`
          });
          this._router.navigate(['charger']);
        });
      }
    });
  }
}
