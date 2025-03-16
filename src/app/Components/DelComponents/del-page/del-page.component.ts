import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-page',
  imports: [CommonModule],
  templateUrl: './del-page.component.html',
  styleUrl: './del-page.component.css'
})
export class DelPageComponent implements OnInit {
  private readonly API = "http://localhost:3000/compromisso"
  objetoRequisicao: any[] = [];
  valor: any[][] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
     this.http.get<any>(this.API.concat(`/${localStorage.getItem("compromissoID")}`)).subscribe(data => { this.valor = Object.entries(data)})
  }

  excluir(){
    this.http.delete<any>(this.API.concat(`/${localStorage.getItem("compromissoID")}`)).subscribe()
    this.router.navigate(["/lista"])
  }
  cancelar(){
    this.router.navigate(["/lista"])
  }
}
