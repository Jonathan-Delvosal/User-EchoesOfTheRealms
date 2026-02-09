import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './Decoration/banner/banner';
import { Footer } from './Decoration/footer/footer';
import { ConfirmDialog } from "primeng/confirmdialog";
import { Toast } from "primeng/toast";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Footer, ConfirmDialog, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EotR: QuestSharp');
}
