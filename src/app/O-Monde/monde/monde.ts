import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Statperso } from '../../O-Perso/statperso/statperso';
import { Chatbox } from '../chatbox/chatbox';
import { Map } from '../map/map';

@Component({
  selector: 'app-monde',
  imports: [RouterModule, Statperso, Chatbox, Map],
  templateUrl: './monde.html',
  styleUrl: './monde.scss'
})
export class Monde {

}
