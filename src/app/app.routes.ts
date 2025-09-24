import { Routes } from '@angular/router';
import { Monde } from './O-Monde/monde/monde';
import { MenuPrincipale } from './menu-principale/menu-principale';
import { Charger } from './O-Option/charger/charger';
import { Sauvegarder } from './O-Option/sauvegarder/sauvegarder';
import { FichePersonnage } from './O-Perso/fiche-personnage/fiche-personnage';
import { Inventaire } from './O-Perso/inventaire/inventaire';
import { Option } from './O-Option/option/option';
import { Statperso } from './O-Perso/statperso/statperso';
import { Perso } from './O-Perso/perso/perso';
import { Equipement } from './O-Perso/equipement/equipement';
import { EquipementAjout } from './O-Perso/equipement-ajout/equipement-ajout';
import { EquipementRetrait } from './O-Perso/equipement-retrait/equipement-retrait';
import { Map } from './O-Monde/map/map';
import { AffichEquip } from './O-Perso/affich-equip/affich-equip';
import { Chatbox } from './O-Monde/chatbox/chatbox';
import { Logscreen } from './O-Connexion/logscreen/logscreen';
import { isLoggedGuard } from './Guard/is-logged-guard';
import { Account } from './Account/account/account';
import { SignUpScreen } from './O-Connexion/sign-up-screen/sign-up-screen';
import { About } from './about/about';


export const routes: Routes = [

    { path: "", pathMatch: "full", component: Logscreen },

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
                    { path: 'statperso', component: Statperso },
                    { path: "chatbox", component: Chatbox },
                    { path: "map", component: Map },
                    { path: '**', redirectTo: 'monde', pathMatch: 'full' },
                ]
            },

            {
                path: 'perso', component: Perso,

                children: [

                    { path: 'fiche-personnage', component: FichePersonnage },

                    { path: 'inventaire', component: Inventaire },

                    {
                        path: 'equipement', component: Equipement, children:
                            [
                                { path: 'equipement-ajout', component: EquipementAjout },
                                { path: 'equipement-retrait', component: EquipementRetrait },
                                { path: '', component: AffichEquip },
                                { path: '**', redirectTo: 'equipement', pathMatch: 'full' },
                            ]
                    },

                    { path: '**', redirectTo: 'perso', pathMatch: 'full' },
                ]
            },

            {
                path: 'option', component: Option,

                children: [

                    { path: 'sauvegarder', component: Sauvegarder },

                    { path: 'charger', component: Charger },

                    { path: '**', redirectTo: 'option', pathMatch: 'full' },

                ]
            },

            { path: 'compte', component: Account }
        ]
    },
];
