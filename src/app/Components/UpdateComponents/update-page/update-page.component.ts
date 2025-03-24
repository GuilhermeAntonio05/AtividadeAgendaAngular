import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css',
  imports: [FormsModule, CommonModule]
})
export class UpdatePageComponent implements OnInit {
  private readonly API = "http://localhost:3000/compromisso"
  valor: any[][] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>(this.API.concat(`/${localStorage.getItem("compromissoID")}`)).subscribe(data => { this.valor = Object.entries(data), console.log("Valor: ", this.valor) })
  }

  salvar() {
    this.http.put<any>(this.API.concat(`/${localStorage.getItem("compromissoID")}`), Object.fromEntries(this.valor)).subscribe()
    this.router.navigate(["/listaComponentes"])
  }

  goToLista() {
    this.router.navigate(['listaComponentes'])
  }

}