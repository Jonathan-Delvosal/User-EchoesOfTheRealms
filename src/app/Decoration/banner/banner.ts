import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})

export class Banner {
  constructor(private _router: Router) {}

  Redirect() {
    this._router.navigate(['/menu']);
  }

}
