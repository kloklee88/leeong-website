import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { VacationsModule } from './vacations/vacations.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        VacationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAbfskcTo1rQaXr2260hW3ugtaic2Ho-P8'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
