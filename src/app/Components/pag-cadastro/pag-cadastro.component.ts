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
  private readonly API = "http://localhost:3000/usuario"
  constructor(private router: Router, private http: HttpClient) { }

  login = new FormGroup({
    nome: new FormControl(""),
    email: new FormControl(""),
    senha: new FormControl(""),
    permissao: new FormControl("comum")
  });

  cadastrar() {
    this.http.post<Usuario>(this.API, this.login.value).subscribe(
      response => console.log("Sucesso:", response),
      error => console.error("Erro:", error)
    );
    this.router.navigate([''])
  }
}
