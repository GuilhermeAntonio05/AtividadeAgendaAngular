import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-contato-page',
  imports: [CommonModule],
  templateUrl: './del-contato-page.component.html',
  styleUrl: './del-contato-page.component.css'
})
export class DelContatoPageComponent {
  private readonly API = "http://localhost:3000/contato"
  valor: any[][] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.API.concat(`/${localStorage.getItem("contatoID")}`)).subscribe(data => { this.valor = Object.entries(data) })
  }

  excluir() {
    this.http.delete<any>(this.API.concat(`/${localStorage.getItem("contatoID")}`)).subscribe()
    this.router.navigate(["/listaContatos"])
  }
  cancelar() {
    this.router.navigate(["/listaContatos"])
  }

}
