import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../../../interfaces/compromisso';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Contato } from '../../../../interfaces/contato';
import { Local } from '../../../../interfaces/local';
import { forkJoin, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-desc-item',
  imports: [],
  templateUrl: './desc-item.component.html',
  styleUrl: './desc-item.component.css'
})
export class DescItemComponent implements OnInit {
  private readonly API = "http://localhost:3000/compromisso";
  private readonly LOCAL_API = "http://localhost:3000/local";
  private readonly CONTATO_API = "http://localhost:3000/contato";

  compromisso: Compromisso = { id: 0, titulo: "", data: "", descricao: "", hora: "", contatoId: 0, localId: 0, usuarioId: 0 };
  contato: Contato = { id: 0, nome: '', telefone: '', email: '', usuarioId: '' }
  local: Local = { nome: '', endereco: '' }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.http.get<Compromisso>(this.API.concat(`/${localStorage.getItem("compromissoID")}`)).subscribe(data => this.compromisso = data)
    // this.http.get<Contato>(this.CONTATO_API.concat(`/${this.compromisso.contatoId}`)).subscribe(data => this.contato = data)
    // this.http.get<Local>(this.LOCAL_API.concat(`/${this.compromisso.localId}`)).subscribe(data => this.local = data)

    this.http.get<Compromisso>(this.API.concat(`/${localStorage.getItem("compromissoID")}`))
      .pipe(
        tap(compromisso => this.compromisso = compromisso),
        switchMap(compromisso => forkJoin({
          contato: this.http.get<Contato>(this.CONTATO_API.concat(`/${compromisso.contatoId}`)),
          local: this.http.get<Local>(this.LOCAL_API.concat(`/${compromisso.localId}`))
        }))
      )
      .subscribe(({ contato, local }) => {
        this.contato = contato;
        this.local = local;
      });
  }

  pagInical() {
    this.router.navigate(["/listaComponentes"])
  }

  deletar() {
    this.router.navigate(["/delPage"])
  }

  editar() {
    this.router.navigate(["/updatePage"])
  }
}
