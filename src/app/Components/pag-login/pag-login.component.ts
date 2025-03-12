import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-pag-login',
  imports: [ReactiveFormsModule],
  templateUrl: './pag-login.component.html',
  styleUrl: './pag-login.component.css'
})
export class PagLoginComponent {
  private readonly API = "http://localhost:3000/usuario"
  constructor(private router: Router, private http: HttpClient) { }

  informacoesLogin: Usuario[] = []


  login = new FormGroup({
    nome: new FormControl(""),
    senha: new FormControl(""),
  });

  logar() {
    this.http.get<Usuario[]>(this.API).subscribe(data => {
      this.informacoesLogin = data;

      const usuarioEncontrado = this.informacoesLogin.find(
        usuario => usuario.nome == this.login.value.nome && usuario.senha == this.login.value.senha
      );

      if (usuarioEncontrado) {
        this.router.navigate(['/lista']);
      } else {
        alert("Usuário não encontrado!");
      }
    });
  }

  cadastrar() {
    this.router.navigate(['/cadastroUsuario'])
  }

}