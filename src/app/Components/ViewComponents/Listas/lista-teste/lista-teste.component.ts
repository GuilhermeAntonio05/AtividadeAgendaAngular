import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from '../../../../interfaces/compromisso';
import { AuthService } from '../../../../Service/auth-service.service';
import { Usuario } from '../../../../interfaces/usuario';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-teste',
  imports: [CommonModule],
  templateUrl: './lista-teste.component.html',
  styleUrl: './lista-teste.component.css'
})
export class ListaTesteComponent implements OnInit {

  private readonly API = "http://localhost:3000/compromisso"
  private readonly APIUSER = "http://localhost:3000/usuario"

  compromisso: Compromisso[] = []
  role: String | null = '';
  username: String | null = '';

  constructor(private router: Router, private http: HttpClient, private service: AuthService) {
    this.role = this.service.getUserRole()
    this.username = this.service.getUserUsername()
  }

  ngOnInit(): void {
    if (this.role == "admin") {
      this.http.get<Compromisso[]>(this.API).subscribe(data => { this.compromisso = data })
    }

    //Else feito com ajuda do chatgpt
    else {
      this.http.get<Usuario[]>(this.APIUSER).pipe(
        switchMap(usuarios => {
          const usuarioEncontrado = usuarios.find(user => user.email === this.username); // Encontrar o usuário pelo email
          if (usuarioEncontrado) {
            const userId = usuarioEncontrado.id; // Pega o id do usuário encontrado
            localStorage.setItem("userID", `${userId}`)
            return this.http.get<Compromisso[]>(`${this.API}?usuarioId=${userId}`); // busca pelo atributo usuarioID
          } else {
            throw new Error("Usuário não encontrado");
          }
        })
      ).subscribe(
        data => {
          this.compromisso = data;
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

  cadCompromisso() {
    this.router.navigate(['/cadastroComponente'])
  }

  cadLocal() {
    this.router.navigate(['/cadastroLocal'])
  }

  cadContato() {
    this.router.navigate(['/cadastroContato'])
  }

  visualizar(id: any) {
    localStorage.setItem("compromissoID", `${id}`)
    this.router.navigate(["/descricao"])
  }

  deletarContato() {
    this.router.navigate(["/delContatoPage"])
  }

  deletarLocal() {
    this.router.navigate(["/delLocalPage"])
  }

  deletar(id: any) {
    localStorage.setItem("compromissoID", `${id}`)
    this.router.navigate(["/delPage"])
  }

  editar(id: any) {
    localStorage.setItem("compromissoID", `${id}`)
    this.router.navigate(["/updatePage"])
  }

  logout() {
    localStorage.removeItem("compromissoID"), localStorage.removeItem("localID"), localStorage.removeItem("contatoID"),
      localStorage.removeItem("userID"),
      localStorage.removeItem("token")
    this.router.navigate([""])
  }
}
