import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostoListComponent } from './modules/postos/posto-list/posto-list.component';
import { ViagensListComponent } from './modules/viagens/viagens-list/viagens-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { ViagensCriacaoComponent } from './modules/viagens/viagens-criacao/viagens-criacao.component';
import { TableComponent } from './shared/table/table.component';
import { FormComponent } from './shared/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostoCriacaoComponent } from './modules/postos/posto-criacao/posto-criacao.component';
import { CreateButtonComponent } from './shared/create-button/create-button.component';
import { UsuariosCriacaoComponent } from './modules/usuarios/usuarios-criacao/usuarioscriacao.component';
import { UsuariosListComponent } from './modules/usuarios/usuarios-list/usuarios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostoListComponent,
    PostoCriacaoComponent,
    ViagensListComponent,
    ViagensCriacaoComponent,
    UsuariosListComponent,
    UsuariosCriacaoComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    CreateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
