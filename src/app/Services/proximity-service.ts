import { Injectable, signal, computed } from '@angular/core';
import { MonsterState } from '../models/MonsterState';

@Injectable({
  providedIn: 'root'
})
export class ProximityService {
  private _monsters = signal<MonsterState[]>([]);

  monsters = computed(() => this._monsters());

  setMonsters(list: MonsterState[]) {
    this._monsters.set(list);
  }

  addMonster(m: MonsterState) {
    this._monsters.update(arr => [...arr, m]);
  }

  clear() {
    this._monsters.set([]);
  }

  pickRandom(): MonsterState | null {
    const arr = this._monsters();
    if (arr.length === 0) return null;
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
  }
}
