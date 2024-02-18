import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-skill',
  templateUrl: './add-edit-skill.component.html',
  styleUrls: ['./add-edit-skill.component.css']
})
export class AddEditSkillComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() skill:any;
  SkillId!:string;
 
  Name!:string;
  
  Status!:string;


  ngOnInit(): void {
    this.SkillId=this.skill.SkillId;
   
    this.Name=this.skill.Name;
  
    this.Status=this.skill.Status;
  }

  addSkill(){
    var val = {SkillId:this.SkillId,
    
                Name:this.Name,
               
                Status:this.Status};

    this.service.addSkill(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateSkill(){
    var val = {SkillId:this.SkillId,
      
                Name:this.Name,
               
                Status:this.Status
    };
    this.service.updateSkill(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
