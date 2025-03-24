import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';

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

  cadastro = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    role: new FormControl("user", [Validators.required])
  });

  cadastrar() {

    this.http.post<Usuario>(this.PROFESSOR_API, this.cadastro.value).subscribe(
      response => console.log("Sucesso:", response),
      error => alert("Erro ao cadastrar o usuário!")
    );

    this.http.post<Usuario>(this.API, this.cadastro.value).subscribe(
      response => console.log("Sucesso:", response),
      error => alert("Erro ao cadastrar o usuário!")
    );
    this.router.navigate([''])
  }

  goToLogin() {
    this.router.navigate([""])
  }
}
