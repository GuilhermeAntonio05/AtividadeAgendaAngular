import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-contato',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-contato.component.html',
  styleUrl: './update-contato.component.css'
})
export class UpdateContatoComponent {
private readonly API = "http://localhost:3000/contato"
  valor: any[][] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
      this.http.get<any>(this.API.concat(`/${localStorage.getItem("contatoID")}`)).subscribe(data => { this.valor = Object.entries(data), console.log("Valor: ", this.valor) })
  }

  salvar() {
    this.http.put<any>(this.API.concat(`/${localStorage.getItem("contatoID")}`), Object.fromEntries(this.valor)).subscribe()
    this.router.navigate(["/listaContatos"])
  }
}
