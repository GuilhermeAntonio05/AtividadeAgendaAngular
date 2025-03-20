import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-pag-login',
  imports: [ReactiveFormsModule],
  templateUrl: './pag-login.component.html',
  styleUrl: './pag-login.component.css'
})
export class PagLoginComponent {
  private readonly API = "http://localhost:3000/usuario"
  private readonly PROFESSOR_API = "https://api-users-gdsb.onrender.com/login"

  constructor(private router: Router, private http: HttpClient) { }

  informacoesLogin: Usuario[] = []

  login = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  async logar() {
   this.http.post<Usuario>(this.PROFESSOR_API, this.login.value).subscribe(response => {localStorage.setItem("token", `${response.token}`),this.router.navigate(['/listaComponentes']);})
    /*
        this.http.get<Usuario[]>(this.API).subscribe(data => {
          this.informacoesLogin = data;
    
          const usuarioEncontrado = this.informacoesLogin.find(
            usuario => usuario.email == this.login.value.email && usuario.password == this.login.value.password
          );
    
          const valorIndex = this.informacoesLogin.findIndex(
            usuario => usuario.email == this.login.value.email && usuario.password == this.login.value.password
          );
    */
    //if (usuarioEncontrado) {
    
    //   } else {
    ////    alert("Usuário não encontrado!");
    //  }
  }


  cadastrar() {
    this.router.navigate(['/cadastroUsuario'])
  }

}