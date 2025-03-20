import { Component } from '@angular/core';
import { Local } from '../../../../interfaces/local';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Service/auth-service.service';

@Component({
  selector: 'app-desc-local',
  imports: [],
  templateUrl: './desc-local.component.html',
  styleUrl: './desc-local.component.css'
})
export class DescLocalComponent {
 private readonly API = "http://localhost:3000/local";
  local: Local = {nome: '',endereco: ''};
  role: string | null;
  username: string | null;

  constructor(private http: HttpClient,private router: Router, private auth: AuthService) {
    this.role = auth.getUserRole();
    this.username = auth.getUserUsername();
   }

  ngOnInit(): void {

    if(this.role == "admin"){
      this.http.get<Local>(this.API.concat(`/${localStorage.getItem("localID")}`)).subscribe(data => this.local = data)
    }else{
      this.router.navigate(["listaLocais"])
    }
  }

  pagInical(){
    this.router.navigate(["/listaLocais"])
  }

  deletar() {
    this.router.navigate(["/delLocalPage"])  
  }

  editar() {
    this.router.navigate(["/updateLocal"])  
  }
}
