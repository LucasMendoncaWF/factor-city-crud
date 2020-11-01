import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {


  data;
  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.data = await this.consultaService.getAll('user').toPromise();
   }

}
