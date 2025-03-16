import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../../interfaces/compromisso';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desc-item',
  imports: [],
  templateUrl: './desc-item.component.html',
  styleUrl: './desc-item.component.css'
})
export class DescItemComponent implements OnInit {
  private readonly API = "http://localhost:3000/compromisso";
  compromisso: Compromisso = { id: 0, titulo: "", data: "", descricao: "", hora: "", contatoId: 0, localId: 0, usuarioId: 0 };

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get<Compromisso>(this.API.concat(`/${localStorage.getItem("compromissoID")}`)).subscribe(data => this.compromisso = data)
  }

  pagInical(){
    this.router.navigate(["/lista"])
  }

  deletar() {
    this.router.navigate(["/delPage"])  
  }
}
