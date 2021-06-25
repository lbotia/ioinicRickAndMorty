import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  nameCharacter: string;
  specieCharacter: string;
  origenCharacter: string;

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.nameCharacter = this.navParams.get('name');
    this.specieCharacter = this.navParams.get('specie');
    this.origenCharacter = this.navParams.get('origin');


  }
}
