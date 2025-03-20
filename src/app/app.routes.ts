import { Routes } from '@angular/router';
import { CadastroCompromissoComponent } from './Components/AddComponents/cadastro-compromisso/cadastro-compromisso.component';
import { CadastroContatoComponent } from './Components/AddComponents/cadastro-contato/cadastro-contato.component';
import { CadastroLocalComponent } from './Components/AddComponents/cadastro-local/cadastro-local.component';
import { PagCadastroComponent } from './Components/AddComponents/pag-cadastro/pag-cadastro.component';
import { DelContatoPageComponent } from './Components/DelComponents/del-contato-page/del-contato-page.component';
import { DelLocalPageComponent } from './Components/DelComponents/del-local-page/del-local-page.component';
import { DelPageComponent } from './Components/DelComponents/del-page/del-page.component';
import { UpdatePageComponent } from './Components/UpdateComponents/update-page/update-page.component';
import { DescItemComponent } from './Components/ViewComponents/Desc-Itens/desc-item/desc-item.component';
import { ListaContatoComponent } from './Components/ViewComponents/Listas/lista-contato/lista-contato.component';
import { ListaTesteComponent } from './Components/ViewComponents/Listas/lista-teste/lista-teste.component';
import { PagLoginComponent } from './Components/ViewComponents/pag-login/pag-login.component';
import { authGuard } from './Guard/auth.guard';
import { ListaLocalComponent } from './Components/ViewComponents/Listas/lista-local/lista-local.component';
import { UpdateLocalComponent } from './Components/UpdateComponents/update-local/update-local.component';
import { DescLocalComponent } from './Components/ViewComponents/Desc-Itens/desc-local/desc-local.component';
import { DescContatoComponent } from './Components/ViewComponents/Desc-Itens/desc-contato/desc-contato.component';
import { UpdateContatoComponent } from './Components/UpdateComponents/update-contato/update-contato.component';

export const routes: Routes = [
    { path: "", component: PagLoginComponent },
    { path: "cadastroUsuario", component: PagCadastroComponent},
    { path: "listaComponentes", component: ListaTesteComponent, canActivate:[authGuard] },
    { path: "listaContatos", component: ListaContatoComponent, canActivate:[authGuard] },
    { path: "listaLocais", component: ListaLocalComponent, canActivate:[authGuard] },
    { path: "cadastroComponente", component: CadastroCompromissoComponent, canActivate:[authGuard] },
    { path: "cadastroLocal", component: CadastroLocalComponent, canActivate:[authGuard] },
    { path: "cadastroContato", component: CadastroContatoComponent, canActivate:[authGuard] },
    { path: "descricao", component: DescItemComponent, canActivate:[authGuard] },
    { path: "descricaoLocal", component: DescLocalComponent, canActivate:[authGuard] },
    { path: "descricaoContato", component: DescContatoComponent, canActivate:[authGuard] },
    { path: "delPage", component: DelPageComponent, canActivate:[authGuard]},
    { path: "delLocalPage", component: DelLocalPageComponent, canActivate:[authGuard]},
    { path: "delContatoPage", component: DelContatoPageComponent, canActivate:[authGuard]},
    { path: "updatePage", component: UpdatePageComponent, canActivate:[authGuard]},
    { path: "updateLocal", component: UpdateLocalComponent, canActivate:[authGuard]},
    { path: "updateContato", component: UpdateContatoComponent, canActivate:[authGuard]}
];


