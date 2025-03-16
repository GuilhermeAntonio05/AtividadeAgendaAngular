import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Compromisso } from '../../../interfaces/compromisso';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Local } from '../../../interfaces/local';
import { Contato } from '../../../interfaces/contato';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-cadastro-compromisso',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-compromisso.component.html',
  styleUrl: './cadastro-compromisso.component.css'
})
export class CadastroCompromissoComponent implements OnInit{
  private readonly API = 'http://localhost:3000/compromisso';
  private readonly APILOCAL = 'http://localhost:3000/local';
  private readonly APICONTATO = 'http://localhost:3000/contato';
  private readonly APIUSUARIO = 'http://localhost:3000/usuario';

  locaisRegistrados: Local[] = [];
  contatosRegistrados: Contato[] = [];
  constructor(private router: Router, private http: HttpClient) { }

  compromisso = new FormGroup({
    titulo: new FormControl(""),
    descricao: new FormControl(""),
    data: new FormControl(""),
    hora: new FormControl(""),
    contatoId: new FormControl(""),
    localId: new FormControl(""),
    usuarioId: new FormControl(localStorage.getItem("UserID")) // adicionar função que registra o usuario logado
  });
  
 
  ngOnInit(): void {
   this.http.get<Local[]>(this.APILOCAL).subscribe(data => {this.locaisRegistrados = data})
   this.http.get<Contato[]>(this.APICONTATO).subscribe(data => {this.contatosRegistrados = data})
  }

  cadastrar() {
    this.http.post<Compromisso>(this.API, this.compromisso.value).subscribe();
    this.router.navigate(['lista'])
  }
}
