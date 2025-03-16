import { Routes } from '@angular/router';
import { ListaTesteComponent } from './Components/ViewComponents/lista-teste/lista-teste.component';
import { PagLoginComponent } from './Components/ViewComponents/pag-login/pag-login.component';
import { CadastroCompromissoComponent } from './Components/AddComponents/cadastro-compromisso/cadastro-compromisso.component';
import { CadastroLocalComponent } from './Components/AddComponents/cadastro-local/cadastro-local.component';
import { CadastroContatoComponent } from './Components/AddComponents/cadastro-contato/cadastro-contato.component';
import { PagCadastroComponent } from './Components/AddComponents/pag-cadastro/pag-cadastro.component';
import { DescItemComponent } from './Components/ViewComponents/desc-item/desc-item.component';
import { DelPageComponent } from './Components/DelComponents/del-page/del-page.component';

export const routes: Routes = [
    { path: "", component: PagLoginComponent },
    { path: "cadastroUsuario", component: PagCadastroComponent },
    { path: "lista", component: ListaTesteComponent },
    { path: "cadastroComponente", component: CadastroCompromissoComponent },
    { path: "cadastroLocal", component: CadastroLocalComponent },
    { path: "cadastroContato", component: CadastroContatoComponent },
    { path: "descricao", component: DescItemComponent },
    { path: "delPage", component: DelPageComponent}
];


