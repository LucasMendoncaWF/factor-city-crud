import { Component, Input, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() info: Array<object>;
  @Input() editLink: string;
  @Input() deleteLink: string;
  columns = [];

  constructor(
    private consultaService: ConsultaService,
  ) { }

  ngOnInit() {
    if (this.info && this.info.length) {
      this.columns = Object.keys(this.info[0]);
    }
  }

  async delete(data) {
    await this.consultaService.deleteItem(data, this.deleteLink).toPromise();
    location.reload();
  }
}
