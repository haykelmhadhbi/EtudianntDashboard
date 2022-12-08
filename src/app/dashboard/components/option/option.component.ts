import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() title : any =""
  @Input () firstoption : any =""
  @Input() data : any []=[]; 
  @Input()empSelected: any []=[]
  @Output() selectedValue = new EventEmitter() ;






  constructor(private studentService: ServiceStudentService) { }

  ngOnInit(): void {

    
  }

  studentwithOpt  ={
    opt : ""

  }

  detectChanges (event : any){
    this.selectedValue.emit(event);

  }
 

  
  
   

  


}
