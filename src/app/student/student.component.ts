import { Component  , OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  static studentL: any;
  constructor() { 
      
  }

  ngOnInit() {
    
  }
  studentL = [
    {
      name : "ruba",
      major : "CE"
    },
    {
      name : "aseel",
      major : "civil E"
    }
  ];
 
   addstudentfunction(n,m)
  {
    this.studentL.push({name : n , major : m});
  }

}
