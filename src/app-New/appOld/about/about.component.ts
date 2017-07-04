import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	mySum1 = [
		{ heading:'Full Name:', info:'Satish Raghunath Manval'},
		{ heading:'Address:', info:'Shirvane, Juinagar(Navi Mumbai)'},
		{ heading:'Mobile:', info:'+91 9503516954'},
		{ heading:'Email:', info:'skumar0585@gmail.com'},
	];

	mySum2 = [
		{ heading:'Date of Birthday:', info:'15th Nov 1989'},
		{ heading:'Profile:', info:'Frontend Developer'},
		{ heading:'Experience:', info:'3.6 Years'},
		{ heading:'Website:', info:'www.srmanval.com'},
	];
}
