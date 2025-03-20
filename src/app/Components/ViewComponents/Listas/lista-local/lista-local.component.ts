import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Service/auth-service.service';
import { Local } from '../../../../interfaces/local';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-local',
  imports: [CommonModule],
  templateUrl: './lista-local.component.html',
  styleUrl: './lista-local.component.css'
})
export class ListaLocalComponent implements OnInit {
  private readonly API = "http://localhost:3000/local"
  role: string | null;
  username: string | null;
  locais: Local[] = [];

  constructor(private router: Router, private http: HttpClient, private service: AuthService) {
    this.role = this.service.getUserRole()
    this.username = this.service.getUserUsername()
  }

  ngOnInit(): void {
    if (this.role == "admin") {
      this.http.get<Local[]>(this.API).subscribe(data => { this.locais = data })
    } else{
      this.router.navigate(["listaComponentes"])
    }
  }

  goToComponentes() {
    this.router.navigate(['/listaComponentes'])
  }

  goToLocal() {
    this.router.navigate(['/listaLocais'])
  }

  goToContato() {
    this.router.navigate(['/listaContatos'])
  }

  cadLocal() {
    this.router.navigate(["/cadastroLocal"])
  }

  visualizar(id: any) {
    localStorage.setItem("localID", `${id}`)
    this.router.navigate(["/descricaoLocal"])
  }

  deletar(id: any) {
    localStorage.setItem("localID", `${id}`)
    this.router.navigate(["/delLocalPage"])
  }

  editar(id: any) {
    localStorage.setItem("localID", `${id}`)
    this.router.navigate(["/updateLocal"])
  }
}
