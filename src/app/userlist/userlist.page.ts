import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  characters = [];
  textoBuscar= '';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res =>{
      console.log(res);
      this.characters = res.results;
    });
  }

  buscar(event) {
    //console.log('evento',event);
    this.textoBuscar = event.detail.value;

  }
}
