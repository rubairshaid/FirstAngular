import { MaterialsComponent } from './../materials/materials.component';
import { StudentComponent } from './../student/student.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  ngOnInit() {
  }
  cType ;
  appearList(choosenType)
  {
    this.cType=choosenType;
  }

}
