import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ktsComp = [
  	{ ktsjob :'Designing e-mailers of different hotels with new packages & rates.' },
  	{ ktsjob :'Editing Images & converting to JPEG, GIF format.' },
  	{ ktsjob :'Creating animated images.'},
  	{ ktsjob :'Designing E-mailer in HTML/CSS & Adobe Photoshop.'},
  	{ ktsjob :'Creating video/PPT presentation for Exhibition'},
  	{ ktsjob :'Designing Logos & Icons.'}
  ];

  lspComp = [
  	{ lspjob :'Working on Buildings & Floor plans.'},
  	{ lspjob :'Making Cover Images of building.'},
  	{ lspjob :'Designing & tracing builder Logo.'},
  	{ lspjob :'Colour corrections in 3D floor plan.'},
  	{ lspjob :'Editing images like galleries.'},
  	{ lspjob :'Uploading content on website through backend.'},
  	{ lspjob :'Other works as per business requirement.'},
  	{ lspjob :'Worked on www.housing.com website'}
  ];

  axatComp = [
  	{ axatjob :"Create & Design Logo."},
  	{ axatjob :"Designing banner/cover images, brochures, blog images"},
  	{ axatjob :"Design or modify Mockup for website."},
  	{ axatjob :"Slicing PSD, Conversion of PSD to HTML."},
  	{ axatjob :"Making responsive webpage/website."},
  	{ axatjob :"Uploading content on website using File zilla."},
  	{ axatjob :"Maintaining websites & Resolving frontend issues."},
  	{ axatjob :"Making & Editing video."}
  ];

}
