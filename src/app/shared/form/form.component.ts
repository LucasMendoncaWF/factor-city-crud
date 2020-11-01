import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/formModels';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() fields: Array<Field>;
  @Input() ApiUrl: string;
  @Input() listUrl: string;
  formData = {};
  isEdicao = false;
  loading = false;

  constructor(
    private consultaService: ConsultaService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.fields) {
      for (const field of this.fields) {
        if (field.value) {
          this.formData[field.name] = field.value;
          if (field.name === '_id' && field.value) {
            this.isEdicao = true;
          }
        }
      }
    }
  }

  fieldFill(event, name) {
    this.formData[name] = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    this.send();
  }

  async send() {
    this.loading = true;
    if (this.isEdicao) {
      await this.consultaService.editData(this.formData, this.ApiUrl).toPromise();
    } else {
      await this.consultaService.postData(this.formData, this.ApiUrl).toPromise();
    }
    this.loading = false;
    this.router.navigateByUrl(this.listUrl);
  }

}
