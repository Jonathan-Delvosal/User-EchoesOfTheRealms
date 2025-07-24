import { Routes } from '@angular/router';
import { Monde } from './monde/monde';
import { MenuPrincipale } from './menu-principale/menu-principale';
import { Charger } from './charger/charger';
import { Sauvegarder } from './sauvegarder/sauvegarder';
import { FichePersonnage } from './fiche-personnage/fiche-personnage';
import { Inventaire } from './inventaire/inventaire';
import { Option } from './option/option';
import { Statperso } from './statperso/statperso';
import { Perso } from './perso/perso';
import { Equipement } from './equipement/equipement';
import { EquipementAjout } from './equipement-ajout/equipement-ajout';
import { EquipementRetrait } from './equipement-retrait/equipement-retrait';
import { Map } from './map/map';
import { AffichEquip } from './affich-equip/affich-equip';
import { Chatbox } from './chatbox/chatbox';


export const routes: Routes = [

    {path:'monde', component: Monde, 
        children: [
            {path: 'statperso', component: Statperso},
            {path: "chatbox", component: Chatbox},
            {path: "map", component: Map},
            {path: '**', redirectTo: 'monde', pathMatch: 'full'},
        ]
    },

    {path: 'perso', component: Perso,

        children: [
            {path: 'fiche-personnage', component: FichePersonnage},
            {path: 'inventaire', component: Inventaire},
            {path: 'equipement', component: Equipement, children: 
                [
                    {path: 'equipement-ajout', component: EquipementAjout},
                    {path: 'equipement-retrait', component: EquipementRetrait},
                    {path: '', component: AffichEquip},
                    {path:'**', redirectTo: 'equipement', pathMatch: 'full'},
                ]},
                
            {path:'**', redirectTo: 'perso', pathMatch: 'full'},
        ]
    },

    {path: 'option', component: Option,

        children: [
            {path:'sauvegarder', component: Sauvegarder},
            {path:'charger', component: Charger},
            {path:'**', redirectTo: 'option', pathMatch: 'full'},
        ]
    },
    
];
