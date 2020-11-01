import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field } from 'src/app/models/formModels';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-usuarios-criacao',
  templateUrl: './usuarios-criacao.component.html',
  styleUrls: ['./usuarios-criacao.component.scss']
})
export class UsuariosCriacaoComponent implements OnInit {

  usersList;
  gasStationList;
  fields: Array<Field> = [
    {name: 'email', label: 'E-mail', type: 'text'},
    {name: 'password', label: 'Senha', type: 'text'},
    {name: 'name', label: 'Nome', type: 'text'},
    {name: 'age', label: 'Idade', type: 'number'},
    {name: 'active', label: 'Status', type: 'select', options: [{_id: 0, name: 'Inativo'}, {_id: 1, name: 'Ativo'}]},
  ];

  constructor() { }

  ngOnInit() {
  }
}
