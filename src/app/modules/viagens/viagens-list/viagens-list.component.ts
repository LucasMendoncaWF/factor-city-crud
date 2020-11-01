import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-viagens-list',
  templateUrl: './viagens-list.component.html',
  styleUrls: ['./viagens-list.component.scss']
})
export class ViagensListComponent implements OnInit {


  data;
  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.data = await this.consultaService.getAll('trip').toPromise();
   }

}
