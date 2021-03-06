import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  isWebsite : boolean = true;
  isPsd : boolean = false;
  isCreate : boolean = false;
  isGraph : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showHideWeb(){
    this.isWebsite = true;
    this.isCreate = false;
    this.isGraph = false;
    this.isPsd = false;
  }
  showHidePsd(){
    this.isWebsite = false;
    this.isCreate = false;
    this.isGraph = false;
    this.isPsd = true;
  }
  showHideCreate(){
    this.isWebsite = false;
    this.isCreate = true;
    this.isGraph = false;
    this.isPsd = false;
  }
  showHideGraph(){
    this.isWebsite = false;
    this.isCreate = false;
    this.isGraph = true;
    this.isPsd = false;
  }

}
