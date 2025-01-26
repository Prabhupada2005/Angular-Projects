import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {
  http = inject(HttpClient);
  roleList: IRole[] = [];
  //old way to inject dependacy
  // constructor(private http:HttpClient){

  // }
  ngOnInit(): void {
    this.getAllRoles()
  }
  getAllRoles() {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
    })

  }
  // string,number,boolean,data,object,array,null,undefined
  //  firstname: string = "Angular Tutorial";
  //  angularVersion = "Version 19";

  //  Version:number = 19;

  //  isActive : boolean = false ;

  //  currentDate : Date = new Date();

  //  inputType: string ="button";

  //  selectedState:string="";

  //  showWelcomeAlert(){
  //   alert("Welcome to Angular 18 Tutorial")
  //  }
  //  showMessage(message:string){
  //   alert(message)
  //  }
}
