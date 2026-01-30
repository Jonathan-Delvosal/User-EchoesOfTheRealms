export interface PCSheet {

    id: number;
    name: string;
    class: string;

    hp: number;
    hpMax: number;
    mana: number;
    manaMax: number;

    str: number;
    strMax: number;
    dex: number;
    dexMax: number;
    intel: number;
    intelMax: number;

    vita: number;
    vitaMax: number;

    resFire: number;
    resIce: number;
    resLightning: number;

    lvl: number;
    xp: number;
    xpToNextLevel: number;
    gold: number;
}