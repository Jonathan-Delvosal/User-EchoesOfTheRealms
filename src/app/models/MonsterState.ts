export interface MonsterState {
  id: number;
  name: string;

  hp: number;
  mana: number;

  str: number;
  dex: number;
  intel: number;

  defense: number;

  critChance: number;
  critMultiplier: number;

  resFire: number;
  resIce: number;
  resLightning: number;
}
