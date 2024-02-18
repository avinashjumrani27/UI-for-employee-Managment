import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  EmployeeListWithoutFilter!: any[];

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle!: string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  EmployeeIdFilter:string="";
  EmployeeCodeFilter:string="";
  NameFilter:string="";
  EmailFilter:string="";
  PhoneFilter:string="";
  DOBFilter:string="";
  AgeFilter:string="";
  skillsFilter:string="";
  addressFilter:string="";
  DepartmentFilter:string="";
  StatusFilter:string="";
 DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeCode:"",
      Name:"",
      Email:"",
      Phone:"",
      DOB:"",
      Age:"",
      skills:"",
      address:"",
      Department:"",
      Status:""    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: { EmployeeId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;
    });
  }

  FilterFn(){
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeCodeFilter = this.EmployeeCodeFilter;
    var NameFilter = this.NameFilter;
    var EmailFilter = this.EmailFilter;
    var PhoneFilter = this.PhoneFilter;
    var DOBFilter = this.DOBFilter;
    var AgeFilter = this.AgeFilter;
    var skillsFilter = this.skillsFilter;
    var addressFilter = this.addressFilter;
    var DepartmentFilter = this.DepartmentFilter;
    var StatusFilter = this.StatusFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el: { EmployeeId: { toString: () => string; }; EmployeeCode: { toString: () => string; }; Name: { toString: () => string; };
    Email: { toString: () => string; }; Phone: { toString: () => string; }; DOB: { toString: () => string; };  Age: { toString: () => string; }; skills: { toString: () => string; };
    address: { toString: () => string; };  Department: { toString: () => string; }; Status: { toString: () => string; };}){
        return el.EmployeeId.toString().toLowerCase().includes(
          EmployeeIdFilter.toString().trim().toLowerCase()
        )&&
        el.EmployeeCode.toString().toLowerCase().includes(
          EmployeeCodeFilter.toString().trim().toLowerCase()
        )&& el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )
        &&
        el.Email.toString().toLowerCase().includes(
          EmailFilter.toString().trim().toLowerCase()
        )&& el.Phone.toString().toLowerCase().includes(
          PhoneFilter.toString().trim().toLowerCase()
        )
        &&
        el.DOB.toString().toLowerCase().includes(
          DOBFilter.toString().trim().toLowerCase()
        )&& el.Age.toString().toLowerCase().includes(
          AgeFilter.toString().trim().toLowerCase()
        )
        &&
        el.skills.toString().toLowerCase().includes(
          skillsFilter.toString().trim().toLowerCase()
        )&& el.address.toString().toLowerCase().includes(
          addressFilter.toString().trim().toLowerCase()
        )&&
        el.Department.toString().toLowerCase().includes(
          DepartmentFilter.toString().trim().toLowerCase()
        )&& el.Status.toString().toLowerCase().includes(
          StatusFilter.toString().trim().toLowerCase()
        )

    });
  }

  sortResult(prop: string | number,asc: any){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
