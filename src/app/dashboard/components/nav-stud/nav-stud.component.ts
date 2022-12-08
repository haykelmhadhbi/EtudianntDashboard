import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';
import { IStudent } from '../../model/student';
@Component({
  selector: 'app-nav-stud',
  templateUrl: './nav-stud.component.html',
  styleUrls: ['./nav-stud.component.css']
})
export class NavStudComponent implements OnInit {

  constructor(private studentService: ServiceStudentService) { }

  ngOnInit(): void {
    this.getStudentById()
  }
  studentById : any={
    idEtudiant: "",
    prenomE : " ",
    ageE : "",
    nomE: "" ,
    depart: [{
      idDepart:"",
      nomDepart:""
    }
    ],
    emailE : "",
    opt : "" ,
    sexe:"" ,


  }
  IStu : IStudent[]=[];
   


  

  

  studentwithId  ={
    idEtudiant : ""

  }



  getStudentById (){
    this.studentService.getEtudiantbyId(this.studentwithId.idEtudiant).subscribe(
      (res:any)=>{
        this.studentById=res;

        console.log("getStudentById ")
        console.log(this.studentById)

      },
      (errorsss)=>{
        //console.log("errorsss");
       //alert("Student Not exist")
        console.log(errorsss);

      }
    )
  }
 

}
