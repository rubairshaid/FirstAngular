import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  static materialL: any;

  constructor() { }

  ngOnInit() {
  }
  materialL= [{
    name : "digital",
    RNum : 1398
  },
  {
    name : "os",
    RNum : 2009
  }
];

}
