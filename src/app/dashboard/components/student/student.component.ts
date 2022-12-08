import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ServiceStudentService } from '../../service/service-student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
page:number=1;
count:number=0;
tableSize:number=5;
tablesSizes:any=[1,2,3,4];
titles="pagination"
  
  title = 'STUDENT DASHBOARD'
  studentDetails:  any [];
  studentByProf : any [];

  genders:  String []
  selectgender:String =''
  imagestudent='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp'

  studentToUpdate={
    idEtudiant:"",
     prenomE :"",
     nomE :"",
     emailE :"",
     opt :"",
     depart :"",
     ageE :"",
      sexe:""

  };
  studentwithTeacher ={
    prenomP:"",
    nomP:""
  }


  
 
  
  constructor( private studentService: ServiceStudentService) {
   }


   radioChangeHandeler(event:any){
    this.selectgender=event.target.value

   }

  ngOnInit(): void {
    this.getStudentsDetails();
    this.genders=['Male', 'Female' , 'Other']
   this.getStudentByTeacher();


  
   
    
  }
 

 
 
  register(registerForm: NgForm){
    this.studentService.ajouterEtudiant(registerForm.value).subscribe(//registerforme.value will give all values enetered in that form
    (resp: any)=>{
      console.log(resp);
      registerForm.reset();
      this.getStudentsDetails();
    },
    (error)=>{
      console.log(error);
    }
    )
    //register forme andha plusieur data 
  }
  getStudentsDetails(){
    this.studentService.getEtudiant().subscribe(
      (resp:any)=>{
        this.studentDetails=resp ;
        console.log(this.studentDetails);
        console.log("studendetails");
        console.log(resp);

      },
      (erros)=>{
        console.log(erros);
        console.log("erros");

      }
    );
  }
  deleteStudent(student){
    this.studentService.supprimerEtudiant(student.idEtudiant).subscribe(
      (resp:any)=>{
        console.log(resp)
        alert("delete succecful")
        this.getStudentsDetails();
      },
      errors=>{
        console.log(errors);
      }

    );
  }
  edit(student){
    this.studentToUpdate=student;//to way data binding with el post nhot content fi studentoupdat coz ki namel update i am able bech nchouf chamalt kbal

  }
  updateStudent (){
    this.studentService.modifierEtudiant(this.studentToUpdate).subscribe(
      (resp )=>{
        console.log(resp);
      },
      (errors)=>{
        console.log(errors);
      }
    );
  }
   getStudentByTeacher (){
    this.studentService.getEtudiantbyNameProfesseur (this.studentwithTeacher.prenomP , this.studentwithTeacher.nomP).subscribe(
      (res: any)=>{
        console.log("affichage")
        this.studentByProf=res;
        console.log(res)
      },
      (err)=>{
       // alert(err)
        console.log("no found prof or somthing")


      }
    )

  }
  onTableDataChange(event:any){
    this.page=event;
  }
  onTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    // this.getStudentsDetails();
   
  }


}
