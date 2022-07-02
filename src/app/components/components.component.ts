import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { MouseEvent } from '@agm/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    agm-map {
        height: 500px;
      }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    // google maps zoom level
    zoom: number = 4;

    // initial center position for the map
    lat: number = 38.9072;
    lng: number = -77.0369;

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: { year: number, month: number };
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    markers: marker[] = [
        {
            lat: 39.1073,
            lng: -76.5711,
            label: 'A',
            name: 'Pasadena',
            draggable: false
        },
        {
            lat: 28.3772,
            lng: -81.5707,
            label: 'B',
            name: 'Disney World',
            draggable: false
        },
        {
            lat: 39.5117,
            lng: -79.3156,
            label: 'C',
            name: 'Deep Creek',
            draggable: false
        },
        {
            lat: 37.2251,
            lng: -76.6671,
            label: 'D',
            name: 'Kingsmill Resort',
            draggable: false
        },
        {
            lat: 37.3488,
            lng: -76.7309,
            label: 'E',
            name: 'Great Wolf Lodge',
            draggable: false
        },
        {
            lat: 38.705190,
            lng: -75.090490,
            label: 'F',
            name: 'Rehobeth Beach',
            draggable: false
        }
    ]

    constructor(private renderer: Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    name: string;
    draggable: boolean;
}
