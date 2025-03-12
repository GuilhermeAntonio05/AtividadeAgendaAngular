import { Routes } from '@angular/router';
import { ListaTesteComponent } from './Components/lista-teste/lista-teste.component';
import { PagLoginComponent } from './Components/pag-login/pag-login.component';
import { CadastroCompromissoComponent } from './Components/cadastro-compromisso/cadastro-compromisso.component';
import { CadastroLocalComponent } from './Components/cadastro-local/cadastro-local.component';
import { CadastroContatoComponent } from './Components/cadastro-contato/cadastro-contato.component';
import { PagCadastroComponent } from './Components/pag-cadastro/pag-cadastro.component';

export const routes: Routes = [
    { path: "", component: PagLoginComponent },
    { path: "cadastroUsuario", component: PagCadastroComponent },
    { path: "lista", component: ListaTesteComponent },
    { path: "cadastroComponente", component: CadastroCompromissoComponent },
    { path: "cadastroLocal", component: CadastroLocalComponent },
    { path: "cadastroContato", component: CadastroContatoComponent }
];


