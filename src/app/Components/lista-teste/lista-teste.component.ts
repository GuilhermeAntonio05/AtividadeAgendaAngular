import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-teste',
  imports: [CommonModule],
  templateUrl: './lista-teste.component.html',
  styleUrl: './lista-teste.component.css'
})
export class ListaTesteComponent implements OnInit {
  private readonly API = "http://localhost:3000/usuario"
  
  usuarios: Usuario[] = []

  constructor(private router: Router,private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Usuario[]>(this.API).subscribe(data => {this.usuarios = data})
  }

  compromisso() {
    this.router.navigate(['/cadastroComponente'])
  }

  local() {
    this.router.navigate(['/cadastroLocal'])
  }

  contato(){
    this.router.navigate(['/cadastroContato'])
  }
}
