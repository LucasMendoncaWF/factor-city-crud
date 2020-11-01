import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {
  @Input() label: string;
  @Input() createLink: string;


  constructor() { }

  ngOnInit() {
  }

}
