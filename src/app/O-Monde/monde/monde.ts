import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Statperso } from '../../O-Monde/statperso/statperso';
import { Chatbox } from '../chatbox/chatbox';
import { Map } from '../map/map';
import { Proximity } from "../proximity/proximity";
import { Encounter } from "../encounter/encounter";

@Component({
  selector: 'app-monde',
  imports: [RouterModule, Statperso, Chatbox, Map, Proximity, Encounter],
  templateUrl: './monde.html',
  styleUrl: './monde.scss'
})
export class Monde {

}
