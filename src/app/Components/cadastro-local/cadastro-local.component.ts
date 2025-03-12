import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Local } from '../../interfaces/local';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-local',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-local.component.html',
  styleUrl: './cadastro-local.component.css'
})
export class CadastroLocalComponent {
private readonly API = 'http://localhost:3000/local';

  local = new FormGroup({
    nome: new FormControl(""),
    endereco: new FormControl("")
  });

  constructor(private router: Router,private http: HttpClient) { }

  cadastrar() {
    this.http.post<Local>(this.API, this.local.value).subscribe();
    this.router.navigate(['lista'])
  }
}
