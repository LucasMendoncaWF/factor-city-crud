import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-posto-list',
  templateUrl: './posto-list.component.html',
  styleUrls: ['./posto-list.component.scss']
})
export class PostoListComponent implements OnInit {

  data;

  constructor(
    private consultaService: ConsultaService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
   this.data = await this.consultaService.getAll('gas-station').toPromise();
  }

}
