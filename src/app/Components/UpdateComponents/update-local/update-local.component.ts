import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Service/auth-service.service';

@Component({
  selector: 'app-update-local',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-local.component.html',
  styleUrl: './update-local.component.css'
})
export class UpdateLocalComponent implements OnInit {
  private readonly API = "http://localhost:3000/local"
  valor: any[][] = [];
  role: string | null;
  username: string | null;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    this.role = auth.getUserRole();
    this.username = auth.getUserUsername();
  }

  ngOnInit(): void {
    if (this.role == "admin") {
      this.http.get<any>(this.API.concat(`/${localStorage.getItem("localID")}`)).subscribe(data => { this.valor = Object.entries(data), console.log("Valor: ", this.valor) })
    } else {
      this.router.navigate(["listaLocais"])
    }
  }

  salvar() {
    this.http.put<any>(this.API.concat(`/${localStorage.getItem("localID")}`), Object.fromEntries(this.valor)).subscribe()
    this.router.navigate(["/listaLocais"])
  }

  goToLista() {
    this.router.navigate(['listaLocais'])
  }
}