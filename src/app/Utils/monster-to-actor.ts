import { ActorResolved } from '../models/ActorResolved';
import { MonsterState } from '../models/MonsterState';

export function monsterToActorResolved(m: MonsterState): ActorResolved {
  return {
    type: 'Monster',
    id: m.id,

    hp: m.hp,
    mana: m.mana,

    strTotal: m.str,
    dexTotal: m.dex,
    intelTotal: m.intel,

    defenseTotal: m.defense,

    critChanceTotal: m.critChance,
    critMultiplierTotal: m.critMultiplier,

    resFireEffective: m.resFire,
    resIceEffective: m.resIce,
    resLightningEffective: m.resLightning
  };
}
