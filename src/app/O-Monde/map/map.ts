import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-map',
  imports: [RouterModule],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map  {

  // rows = 20;
  // cols = 40;
  // posX = 10;
  // posY = 0;

  // @HostListener('window:keydown', ['$event'])
  // handleKeyDown(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 's' :
  //       if (this.posX < this.rows - 1) this.posX++;
  //       break;
  //     case 'l' :
  //       if (this.posX < this.rows - 1) this.posX++;
  //       break;
  //     case 'ArrowDown':
  //       if (this.posX < this.rows - 1) this.posX++;
  //       break;
  //     case 'z':
  //       if (this.posX > 0) this.posX--;
  //       break;
  //     case 'o':
  //       if (this.posX > 0) this.posX--;
  //       break;
  //     case 'ArrowUp':
  //       if (this.posX > 0) this.posX--;
  //       break;
  //     case 'q':
  //       if (this.posY > 0) this.posY--;
  //       break;
  //     case 'k':
  //       if (this.posY > 0) this.posY--;
  //       break;
  //     case 'ArrowLeft':
  //       if (this.posY > 0) this.posY--;
  //       break;
  //     case 'd':
  //       if (this.posY < this.cols - 1) this.posY++;
  //       break;
  //     case 'm':
  //       if (this.posY < this.cols - 1) this.posY++;
  //       break;
  //     case 'ArrowRight':
  //       if (this.posY < this.cols - 1) this.posY++;
  //       break;
  //   }
  // }

  // isPerso(row: number, col: number): boolean {
  //   return this.posX === row && this.posY === col;
  // }
}
