import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/models/formModels';

@Component({
  selector: 'app-posto-criacao',
  templateUrl: './posto-criacao.component.html',
  styleUrls: ['./posto-criacao.component.scss']
})
export class PostoCriacaoComponent implements OnInit {

  fields: Array<Field> = [
    {name: 'name', label: 'Nome', type: 'text'},
    {name: 'latitude', label: 'Latitude', type: 'text'},
    {name: 'longitude', label: 'Longitude', type: 'text'},
    {name: 'evaluation', label: 'avaliação', type: 'number'},
    {name: 'gasolinePrice', label: 'Preço da Gasolina', type: 'number'},
    {name: 'ethanolPrice', label: 'Preço do Ethanol', type: 'number'},
    {name: 'dieselPrice', label: 'Preço do Diesel', type: 'number'},
    {name: 'gasPrice', label: 'Preço do Posto', type: 'number'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
