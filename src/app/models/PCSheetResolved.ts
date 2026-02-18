import { EquipmentSheet } from "./EquipmentSheet";
import { JobSheet } from "./JobSheet";

export interface PCSheetResolved {
  id: number;
  name: string;

  hp: number;
  mana: number;

  hpMaxTotal: number;
  manaMaxTotal: number;

  strTotal: number;
  dexTotal: number;
  intelTotal: number;
  vitaTotal: number;

  defenseTotal: number;
  critChanceTotal: number;
  critMultiplierTotal: number;

  resFireTotal: number;
  resIceTotal: number;
  resLightningTotal: number;

  resCapMin: number;
  resCapMax: number;

  resFireEffective: number;
  resIceEffective: number;
  resLightningEffective: number;

  lvl: number;
  xp: number;
  xpToNextLevel: number;
  gold: number;

  jobId: number;
  job: JobSheet;

  weapon?: EquipmentSheet | null;
  helmet?: EquipmentSheet | null;
  armor?: EquipmentSheet | null;
  boot?: EquipmentSheet | null;
}
