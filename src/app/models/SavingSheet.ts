export interface SavingSheet {
  hp: number;
  mana: number;

  lvl: number;
  xp: number;
  gold: number;

  jobId: number;

  weaponId?: number | null;
  helmetId?: number | null;
  armorId?: number | null;
  bootId?: number | null;
}