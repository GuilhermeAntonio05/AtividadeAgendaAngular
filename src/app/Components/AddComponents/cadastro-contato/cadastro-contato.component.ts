import { Component } from '@angular/core';
import { Contato } from '../../../interfaces/contato';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-contato.component.html',
  styleUrl: './cadastro-contato.component.css'
})
export class CadastroContatoComponent {
  private readonly API = 'http://localhost:3000/contato';

  contato = new FormGroup({
    nome: new FormControl(""),
    telefone: new FormControl(""),
    email: new FormControl("")
  });

  constructor(private router: Router, private http: HttpClient) { }

  cadastrar() {
    this.http.post<Contato>(this.API, this.contato.value).subscribe();
    this.router.navigate(['lista'])

  }
}
