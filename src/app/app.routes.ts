import { Routes } from '@angular/router';
import { ListaTesteComponent } from './Components/ViewComponents/lista-teste/lista-teste.component';
import { PagLoginComponent } from './Components/ViewComponents/pag-login/pag-login.component';
import { CadastroCompromissoComponent } from './Components/AddComponents/cadastro-compromisso/cadastro-compromisso.component';
import { CadastroLocalComponent } from './Components/AddComponents/cadastro-local/cadastro-local.component';
import { CadastroContatoComponent } from './Components/AddComponents/cadastro-contato/cadastro-contato.component';
import { PagCadastroComponent } from './Components/AddComponents/pag-cadastro/pag-cadastro.component';
import { DescItemComponent } from './Components/ViewComponents/desc-item/desc-item.component';
import { DelPageComponent } from './Components/DelComponents/del-page/del-page.component';
import { UpdatePageComponent } from './Components/UpdateComponents/update-page/update-page.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    { path: "", component: PagLoginComponent },
    { path: "cadastroUsuario", component: PagCadastroComponent},
    { path: "lista", component: ListaTesteComponent, canActivate:[authGuard] },
    { path: "cadastroComponente", component: CadastroCompromissoComponent, canActivate:[authGuard] },
    { path: "cadastroLocal", component: CadastroLocalComponent, canActivate:[authGuard] },
    { path: "cadastroContato", component: CadastroContatoComponent, canActivate:[authGuard] },
    { path: "descricao", component: DescItemComponent, canActivate:[authGuard] },
    { path: "delPage", component: DelPageComponent, canActivate:[authGuard]},
    { path: "updatePage", component: UpdatePageComponent, canActivate:[authGuard]}
];


