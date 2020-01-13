import { MaterialsComponent } from './../materials/materials.component';
import { StudentComponent } from './../student/student.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addType;
  addNew(sORmAdd)
  {
    this.addType=sORmAdd;
  }

   ss=new StudentComponent();

  finaladd(nameP,secondP)
  {
      if (this.addType=='addS')
      {
        console.log("hiiiiiiiiiiii");
        //StudentComponent.addstudentfunction(nameP,secondP);
       // this.ss.addstudentfunction(nameP,secondP);
       StudentComponent.studentL.push({name : nameP , major : secondP});
      }
      else
      {
          MaterialsComponent.materialL.push({name : nameP , RNum : secondP});
      }
  }

}
