import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-del-local-page',
  imports: [CommonModule],
  templateUrl: './del-local-page.component.html',
  styleUrl: './del-local-page.component.css'
})
export class DelLocalPageComponent {
  private readonly API = "http://localhost:3000/local"

  valor: any[][] = [];
  username: any;
  role: any;

  constructor(private router: Router, private http: HttpClient, private service: AuthService) {
    this.role = this.service.getUserRole()
    this.username = this.service.getUserUsername()
  }


  ngOnInit() {
    if (this.role == "admin") {
      this.http.get<any>(this.API.concat(`/${localStorage.getItem("localID")}`)).subscribe(data => { this.valor = Object.entries(data) })
    } else {
      this.router.navigate(["listaLocais"])
    }
  }

  excluir() {
    this.http.delete<any>(this.API.concat(`/${localStorage.getItem("localID")}`)).subscribe()
    this.router.navigate(["/listaLocais"])
  }
  cancelar() {
    this.router.navigate(["/listaLocais"])
  }
}
