import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field } from 'src/app/models/formModels';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-viagens-criacao',
  templateUrl: './viagens-criacao.component.html',
  styleUrls: ['./viagens-criacao.component.scss']
})
export class ViagensCriacaoComponent implements OnInit {

  usersList;
  gasStationList;
  fields: Array<Field>;

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers().then(() => {
      this.getGasStations().then(() => {

        this.route.paramMap
          .subscribe(async (paramMap) => {
            const id = paramMap.get('id');
            let info;
            if (id) {
              info = await this.consultaService.getUnique(id, 'trip').toPromise();
            }
            this.fields = [
              {name: 'latitudeOrigin', label: 'Latitude de origem', type: 'text', value: info ? info['latitudeOrigin'] : ''},
              {name: 'longitudeOrigin', label: 'Longitude de origem', type: 'text', value: info ? info['longitudeOrigin'] : ''},
              {name: 'latitudeDestiny', label: 'Latitude de destino', type: 'text', value: info ? info['latitudeDestiny'] : ''},
              {name: 'longitudeDestiny', label: 'Longitude de destino', type: 'text', value: info ? info['longitudeDestiny'] : ''},
              {name: 'tripDistance', label: 'Distância da viagem', type: 'number', value: info ? info['tripDistance'] : ''},
              {name: 'tripDuration', label: 'Duração da viagem', type: 'number', value: info ? info['tripDuration'] : ''},
              {name: 'idUser', label: 'Id de usuario', type: 'select', options: this.usersList, value: info ? info['idUser'] : ''},
              {name: 'idGasStation', label: 'Id do posto', type: 'select',
                options: this.gasStationList, value: info ? info['idGasStation'] : ''},
              {name: '_id', value: info ? info['_id'] : null},
            ];
          });
      });
      }
    );
  }

  async getUsers() {
    this.usersList = await this.consultaService.getAll('user').toPromise();
  }

  async getGasStations() {
    this.gasStationList = await this.consultaService.getAll('gas-station').toPromise();
  }

}
