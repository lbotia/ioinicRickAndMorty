import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('https://rickandmortyapi.com/api/character').subscribe(res =>{
      console.log(res);
    });
  }

}
