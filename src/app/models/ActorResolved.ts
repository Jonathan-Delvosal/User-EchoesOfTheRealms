export type ActorType = 'Character' | 'Monster';

export interface ActorResolved {
  type: ActorType;
  id: number;

  hp: number;
  mana: number;

  strTotal: number;
  dexTotal: number;
  intelTotal: number;

  defenseTotal: number;

  critChanceTotal: number;
  critMultiplierTotal: number;

  resFireEffective: number;
  resIceEffective: number;
  resLightningEffective: number;
}