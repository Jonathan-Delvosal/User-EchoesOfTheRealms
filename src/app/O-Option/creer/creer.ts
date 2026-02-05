import { Component, inject, Signal, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { JobService } from '../../Services/job-service';
import { JobSheet } from '../../models/JobSheet';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-creer',
  imports: [InputTextModule, FloatLabelModule, FormsModule, CommonModule, CardModule, ButtonModule],
  templateUrl: './creer.html',
  styleUrl: './creer.scss'
})
export class Creer {

  _job = inject(JobService)

  value2: string | undefined;

  selectedCategories: any[] = [];
  jobs!: JobSheet[] | null;

  ngOnInit() {
    this._job.loadJobSheet().subscribe(() => {
      this.jobs = this._job.Jobsheet();
    });
  }

}
