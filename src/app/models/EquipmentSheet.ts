export interface EquipmentSheet {
    id: number;
    name: string;

    equipmentType: number;
    equipmentTypeName: string;

    equipmentMaterial: number;
    equipmentMaterialName: string;

    modHP: number;
    modMana: number;

    modStr: number;
    modDex: number;
    modIntel: number;

    modResFire: number;
    modResIce: number;
    modResLightning: number;

    modLvl: number;
    lvlRequirement: number;

    buyPrice: number;
    sellPrice: number;

}