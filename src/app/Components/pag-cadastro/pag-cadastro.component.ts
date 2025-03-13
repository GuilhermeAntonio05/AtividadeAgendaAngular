import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-pag-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './pag-cadastro.component.html',
  styleUrl: './pag-cadastro.component.css'
})
export class PagCadastroComponent {
  private readonly PROFESSOR_API = "https://api-users-gdsb.onrender.com/register"
  private readonly API = "http://localhost:3000/usuario"
  constructor(private router: Router, private http: HttpClient) { }

  login = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    role: new FormControl("user")
  });

  cadastrar() {
    
    this.http.post<Usuario>(this.PROFESSOR_API, this.login.value).subscribe(
      response => console.log("Sucesso:", response),
      error => console.error("Erro:", error)
    );

    this.http.post<Usuario>(this.API, this.login.value).subscribe(
      response => console.log("Sucesso:", response),
      error => console.error("Erro:", error)
    );
    this.router.navigate([''])
  }
}
