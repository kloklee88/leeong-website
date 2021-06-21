import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.scss']
})
export class DisneyComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
