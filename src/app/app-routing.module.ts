import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostoCriacaoComponent } from './modules/postos/posto-criacao/posto-criacao.component';
import { PostoListComponent } from './modules/postos/posto-list/posto-list.component';
import { UsuariosCriacaoComponent } from './modules/usuarios/usuarios-criacao/usuarioscriacao.component';
import { UsuariosListComponent } from './modules/usuarios/usuarios-list/usuarios-list.component';
import { ViagensCriacaoComponent } from './modules/viagens/viagens-criacao/viagens-criacao.component';
import { ViagensListComponent } from './modules/viagens/viagens-list/viagens-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostoListComponent
  },
  {
    path: 'posto/criacao',
    component: PostoCriacaoComponent
  },
  {
    path: 'usuarios',
    component: UsuariosListComponent
  },
  {
    path: 'usuarios/criacao',
    component: UsuariosCriacaoComponent
  },
  {
    path: 'viagens',
    component: ViagensListComponent
  },
  {
    path: 'viagens/criacao',
    component: ViagensCriacaoComponent
  },
  {
    path: 'viagens/criacao/:id',
    component: ViagensCriacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
