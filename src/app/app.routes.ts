import { Routes } from '@angular/router';

import { MenuPrincipale } from './menu-principale/menu-principale';

import { Monde } from './O-Monde/monde/monde';
import { Statperso } from './O-Monde/statperso/statperso';
import { Map } from './O-Monde/map/map';
import { Chatbox } from './O-Monde/chatbox/chatbox';
import { Proximity } from './O-Monde/proximity/proximity';
import { Encounter } from './O-Monde/encounter/encounter';

import { Option } from './O-Option/option/option';
import { Account } from './Account/account/account';
import { Charger } from './O-Option/charger/charger';
import { Sauvegarder } from './O-Option/sauvegarder/sauvegarder';

import { Perso } from './O-Perso/perso/perso';
import { FichePersonnage } from './O-Perso/fiche-personnage/fiche-personnage';
import { Inventaire } from './O-Perso/inventaire/inventaire';
import { Equipement } from './O-Perso/equipement/equipement';
import { EquipementAjout } from './O-Perso/equipement-ajout/equipement-ajout';
import { EquipementRetrait } from './O-Perso/equipement-retrait/equipement-retrait';
import { AffichEquip } from './O-Perso/affich-equip/affich-equip';

import { Merchant } from './O-Marchand/merchant/merchant';

import { Logscreen } from './O-Connexion/logscreen/logscreen';
import { SignUpScreen } from './O-Connexion/sign-up-screen/sign-up-screen';

import { isLoggedGuard } from './Guard/is-logged-guard';

import { About } from './Decoration/about/about';
import { Creer } from './O-Option/creer/creer';


export const routes: Routes = [

    { 
        path: "", pathMatch: "full", component: Logscreen 
    },

    {
        path: "login", component: Logscreen,
    },

    {
        path: 'signup', component: SignUpScreen
    },

    {
        path: 'about', component: About
    },

    {
        path: "menu", component: MenuPrincipale, canActivate: [isLoggedGuard],

        children: [

            {
                path: 'monde', component: Monde,
                children: [

                    { 
                        path: 'statperso', component: Statperso 
                    },

                    { 
                        path: "chatbox", component: Chatbox 
                    },

                    { 
                        path: "map", component: Map 
                    },

                    { 
                        path: "proximity", component: Proximity
                    },

                    { 
                        path: "encounter", component: Encounter
                    },

                    { 
                        path: '**', redirectTo: 'monde', pathMatch: 'full' 
                    },

                ]
            },

            {
                
                path: 'perso', component: Perso,
                children: [

                    { 
                        path: 'fiche-personnage', component: FichePersonnage 
                    },

                    { 
                        path: 'inventaire', component: Inventaire 
                    },

                    {
                        path: 'equipement', component: Equipement,
                        children: [

                            { 
                                path: 'equipement-ajout', component: EquipementAjout 
                            },

                            { 
                                path: 'equipement-retrait', component: EquipementRetrait 
                            },

                            { 
                                path: '', component: AffichEquip 
                            },

                            { 
                                path: '**', redirectTo: 'equipement', pathMatch: 'full' 
                            },

                        ]
                    },

                    { 
                        path: '**', redirectTo: 'perso', pathMatch: 'full' 
                    },

                ]

            },

            {

                path: 'option', component: Option,
                children: [

                    { 
                        path: 'sauvegarder', component: Sauvegarder 
                    },

                    { 
                        path: 'charger', component: Charger 
                    },

                    { 
                        path: 'creer', component: Creer 
                    },

                    { 
                        path: '**', redirectTo: 'option', pathMatch: 'full' 
                    },

                ]

            },

            { 
                path: 'compte', component: Account 
            },

            { 
                path: 'marchand', component: Merchant
            }
            
        ]

    },

];
