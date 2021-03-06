import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { PasadenaComponent } from './pasadena/pasadena.component';
import { VacationsComponent } from './vacations.component';
import { DisneyComponent } from './disney/disney.component';
import { RehobethComponent } from './rehobeth/rehobeth.component';
import { DeepcreekComponent } from './deepcreek/deepcreek.component';
import { KingsmillComponent } from './kingsmill/kingsmill.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        PasadenaComponent,
        DisneyComponent,
        VacationsComponent,
        RehobethComponent,
        DeepcreekComponent,
        KingsmillComponent
    ]
})
export class VacationsModule { }
