import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceStudentService {
  API='http://localhost:8070';

  constructor(private http: HttpClient) { }

  public ajouterEtudiant(studentData: any){
    return this.http.post(this.API+ '/ajouterEtudiant', studentData);
  }
  public getEtudiant (){
    return this.http.get(this.API+'/getEtudiant')
  }
  public supprimerEtudiant (id){
    return this.http.delete(this.API+ '/supprimeretudiant?id='+id);
  }
  public modifierEtudiant (studentData){
    return this.http.put(this.API +'/modifieretudiant',studentData)
  }
  public getEtudiantbyNameProfesseur(prenomP, nomP){
    return this.http.get(this.API+'/getEtudiantByProfesseurwithNomAndPrenom/'+prenomP+'/'+nomP)

  }
  public getEtudiantbyId(id){
    return this.http.get(this.API+'/afficherAllEtduiant/'+id)

  }
  public getEtudiantByOption (op){
    return this.http.get(this.API+'/getEtudiantByOption/'+op)
  }
}
