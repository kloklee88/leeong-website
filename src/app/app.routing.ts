import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { PasadenaComponent } from './vacations/pasadena/pasadena.component';
import { AuntieComponent } from './components/auntie/auntie.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DisneyComponent } from './vacations/disney/disney.component';
import { RehobethComponent } from './vacations/rehobeth/rehobeth.component';
import { DeepcreekComponent } from './vacations/deepcreek/deepcreek.component';
import { KingsmillComponent } from './vacations/kingsmill/kingsmill.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'vacations/pasadena',     component: PasadenaComponent },
    { path: 'vacations/disney',     component: DisneyComponent },
    { path: 'vacations/rehobeth',     component: RehobethComponent },
    { path: 'vacations/deepcreek',     component: DeepcreekComponent },
    { path: 'vacations/kingsmill',     component: KingsmillComponent },
    { path: 'auntie',     component: AuntieComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
