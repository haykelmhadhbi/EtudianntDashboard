import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css']
})
export class TableStudentComponent implements OnInit {
  name="service student"
  link1='assets/option.jpg'
  link2:'assets/departmentinfo.jng'
  showMe:boolean=false
  selectgender:any =''
  empSelected: any ;
  modifiedtext : any ;
  studentByOpt : any []
  Option : any [];




  constructor(private studentService: ServiceStudentService) { }

  ngOnInit(): void {
    this.getStudentByOption()
    this.Option=[
      {opt:"SE"},
      {opt:"GAMIX"},
      {opt:"SAE"},
      {opt:"SIM"},
      {opt:"NIDS"},
      {opt:"CLOUD"},
      {opt:"TWIN"},
      {opt:"SLEAM"},

    ]
    this.studentByOpt 
  }
 
  studentwithOpt  ={
    opt : ""

  }

  selectChangeHandeler(event:any){
    this.selectgender=event.target.value

   }








  getStudentByOption (){
    this.studentService.getEtudiantByOption(this.studentwithOpt.opt).subscribe(
      (res: any)=>{
        console.log("liste by option");
        this.studentByOpt=res;
        console.log( this.studentByOpt);

      },
      (erros:any)=>{
        console.log("errors fi option")
        console.log(erros);

      }
    )

    }
    toogleTag(){
      this.showMe=true
    }
    onOptionSelected(val:any){

      this.customFunction(val);
      this.studentwithOpt.opt=val;
      console.log("jasa")
      console.log(this.studentwithOpt.opt)

    }
    customFunction (val:any){
      this.modifiedtext= "Successful choice of " + " "+ val 
    }
    
}
