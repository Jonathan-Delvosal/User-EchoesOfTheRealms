export interface AttackResult {
  success: boolean;
  errorCode?: string | null;

  damage: number;
  isCrit: boolean;

  variancePercent: number; // ex: -0.07
  manaSpent: number;

  attackerHpAfter: number;
  attackerManaAfter: number;
  defenderHpAfter: number;

  defenderKo: boolean;
}
