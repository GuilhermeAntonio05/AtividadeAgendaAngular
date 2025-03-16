import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from '../../../interfaces/compromisso';

@Component({
  selector: 'app-lista-teste',
  imports: [CommonModule],
  templateUrl: './lista-teste.component.html',
  styleUrl: './lista-teste.component.css'
})
export class ListaTesteComponent implements OnInit {
  private readonly API = "http://localhost:3000/compromisso"
  compromisso: Compromisso[] = []

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Compromisso[]>(this.API).subscribe(data => { this.compromisso = data })
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

  deletar(id: any) {
    localStorage.setItem("compromissoID", `${id}`)
    this.router.navigate(["/delPage"])
  }
}
