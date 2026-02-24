import { PCSheetResolved } from '../models/PCSheetResolved';
import { ActorResolved } from '../models/ActorResolved';

export function pcToActorResolved(pc: PCSheetResolved): ActorResolved {
  return {
    type: 'Character',
    id: pc.id,

    hp: pc.hp,
    mana: pc.mana,

    strTotal: pc.strTotal,
    dexTotal: pc.dexTotal,
    intelTotal: pc.intelTotal,

    defenseTotal: pc.defenseTotal,

    critChanceTotal: pc.critChanceTotal,
    critMultiplierTotal: pc.critMultiplierTotal,

    resFireEffective: pc.resFireEffective,
    resIceEffective: pc.resIceEffective,
    resLightningEffective: pc.resLightningEffective
  };
}
