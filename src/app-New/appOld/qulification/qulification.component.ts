import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qulification',
  templateUrl: './qulification.component.html',
  styleUrls: ['./qulification.component.css']
})
export class QulificationComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }

  course = [
		{ descript:'Designing Web Templates/ Mockups PSD.' },
		{ descript:'Designing Table-less DIV Structures.'},
		{ descript:'Converting a PSD template into a webpage.' },
		{ descript:'Create the inner pages and interlinking them.'},
		{ descript:'Applying J Query Widgets and Effects to Web Page.' },
		{ descript:'Applying styles to website using CSS & CSS3.'},
		{ descript:'Creating table-less CSS layouts, Rendering Javascript /Jquery code.'},
		{ descript:'Designing a complete template using HTML5 & CSS3.'},
	];

  myQualify = [
  		{ education:'S.S.C.', board:'Kolhapur Board', year:'2006', grade:'83.20%'},
  		{ education:'H.S.C.', board:'Kolhapur Board', year:'2008', grade:'72.00%'},
  		{ education:'B.Sc(IT)', board:'Mumbai University', year:'20011', grade:'61.64%'}
  ];
}
