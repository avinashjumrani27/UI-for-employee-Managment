import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId!:string;
  EmployeeCode!: string;
  Name!:string;
  Email!:string;
  Phone!: string;
  DOB!:string;
  Age!:string;
  skills!: string;
  address!:string;
  Department!: string;
  Status!:string;


  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.EmployeeCode=this.emp.EmployeeCode;
    this.Name=this.emp.Name;
    this.Email=this.emp.Email;
    this.Phone=this.emp.Phone;
    this.DOB=this.emp.DOB;
    this.Age=this.emp.Age;
    this.skills=this.emp.skills;
    this.address=this.emp.address;
    this.Department=this.emp.Department;
    this.Status=this.emp.Status;
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeCode:this.EmployeeCode,
                Name:this.Name,
                Email:this.Email,
                Phone:this.Phone,
                DOB:this.DOB,
                Age:this.Age,
                skills:this.skills,
                address:this.address,
                Department:this.Department,
                Status:this.Status};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeCode:this.EmployeeCode,
                Name:this.Name,
                Email:this.Email,
                Phone:this.Phone,
                DOB:this.DOB,
                Age:this.Age,
                skills:this.skills,
                address:this.address,
                Department:this.Department,
                Status:this.Status
    };
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}