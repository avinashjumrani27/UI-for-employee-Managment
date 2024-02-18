import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:53535/api";

  constructor(private http:HttpClient) {
    
   }
   getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getSkillList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Skills');
  }

  addSkill(val:any){
    return this.http.post(this.APIUrl+'/Skills',val);
  }

  updateSkill(val:any){
    return this.http.put(this.APIUrl+'/Skills',val);
  }

  deleteSkill(val:any){
    return this.http.delete(this.APIUrl+'/Skills/'+val);
  } 
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  } 
  getAllDepartmentNames():Observable<any[]>{

    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }
}
