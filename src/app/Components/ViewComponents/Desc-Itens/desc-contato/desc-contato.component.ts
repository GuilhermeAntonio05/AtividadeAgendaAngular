import { Component } from '@angular/core';
import { Contato } from '../../../../interfaces/contato';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desc-contato',
  imports: [],
  templateUrl: './desc-contato.component.html',
  styleUrl: './desc-contato.component.css'
})
export class DescContatoComponent {
  private readonly API = "http://localhost:3000/contato";
  contatos: Contato = {
    id: 0, nome: '', telefone: '', email: '',
    usuarioId: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Contato>(this.API.concat(`/${localStorage.getItem("contatoID")}`)).subscribe(data => this.contatos = data)
  }

  pagInical() {
    this.router.navigate(["/listaContatos"])
  }

  deletar() {
    this.router.navigate(["/delPage"])
  }

  editar() {
    this.router.navigate(["/updatePage"])
  }
}
