import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contato } from '../../../../interfaces/contato';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../Service/auth-service.service';
import { Local } from '../../../../interfaces/local';
import { Usuario } from '../../../../interfaces/usuario';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-lista-contato',
  imports: [CommonModule],
  templateUrl: './lista-contato.component.html',
  styleUrl: './lista-contato.component.css'
})
export class ListaContatoComponent {

  private readonly API = "http://localhost:3000/contato"
  private readonly APIUSER = "http://localhost:3000/usuario"
  contatos: Contato[] = [];
  role: string | null;
  username: string | null;

  constructor(private router: Router, private http: HttpClient, private auth: AuthService) {
    this.role = this.auth.getUserRole()
    this.username = this.auth.getUserUsername()
  }

  ngOnInit(): void {
    if (this.role == "admin") {
      this.http.get<Contato[]>(this.API).subscribe(data => { this.contatos = data })
    }

    //Else feito com ajuda do chatgpt
    else {
      this.http.get<Usuario[]>(this.APIUSER).pipe(
        switchMap(usuarios => {
          const usuarioEncontrado = usuarios.find(user => user.email === this.username); // Encontrar o usuário pelo email
          if (usuarioEncontrado) {
            const userId = usuarioEncontrado.id; // Pega o id do usuário encontrado
            localStorage.setItem("userID", `${userId}`)
            return this.http.get<Contato[]>(`${this.API}?usuarioId=${userId}`); // Alterado para buscar compromissos pelo userId
          } else {
            throw new Error("Usuário não encontrado");
          }
        })
      ).subscribe(
        data => {
          this.contatos = data;
          console.log("Compromissos encontrados!");
        },
        error => {
          console.error(error);
        }
      );
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

  deletar(id: any) {
    localStorage.setItem("contatoID", `${id}`)
    this.router.navigate(["delContatoPage"])
  }
  editar(id: any) {
    localStorage.setItem("contatoID", `${id}`)
    this.router.navigate(["updateContato"])
  }
  visualizar(id: any) {
    localStorage.setItem("contatoID", `${id}`)
    this.router.navigate(["descricaoContato"])
  }

  cadContato() {
    this.router.navigate(["cadastroContato"])
  }
}
