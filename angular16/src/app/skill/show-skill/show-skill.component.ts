import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';



@Component({
  selector: 'app-show-skill',
  templateUrl: './show-skill.component.html',
  styleUrls: ['./show-skill.component.css']
})
export class ShowSkillComponent implements OnInit {
 skillListWithoutFilter!: any[];

  constructor(private service:SharedService) { }

  SkillList:any=[];

  ModalTitle!: string;
  ActivateAddEditSkillComp:boolean=false;
  skill:any;

 SkillIdFilter:string="";
  
  NameFilter:string="";
  
  StatusFilter:string="";
 SkillListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshskillList();
  }

  addClick(){
    this.skill={
     SkillId:0,
      
      Name:"",
      
      Status:""    }
    this.ModalTitle="Add Skill";
    this.ActivateAddEditSkillComp=true;

  }

  editClick(item: any){
    this.skill=item;
    this.ModalTitle="Edit Skill";
    this.ActivateAddEditSkillComp=true;
  }

  deleteClick(item: { SkillId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.SkillId).subscribe(data=>{
        alert(data.toString());
        this.refreshskillList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSkillComp=false;
    this.refreshskillList();
  }


  refreshskillList(){
    this.service.getSkillList().subscribe((data: any)=>{
      this.SkillList=data;
      this.SkillListWithoutFilter=data;
    });
  }

  FilterFn(){
    var SkillIdFilter = this.SkillIdFilter;
   
    var NameFilter = this.NameFilter;
    
    var StatusFilter = this.StatusFilter;

    this.SkillList = this.SkillListWithoutFilter.filter(function (el: { SkillId: { toString: () => string; };Name: { toString: () => string; };
     Status: { toString: () => string; };}){
        return el.SkillId.toString().toLowerCase().includes(
          SkillIdFilter.toString().trim().toLowerCase()
        )&&
         el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )
       && el.Status.toString().toLowerCase().includes(
          StatusFilter.toString().trim().toLowerCase()
        )

    });
  }

  sortResult(prop: string | number,asc: any){
    this.SkillList = this.SkillListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}


