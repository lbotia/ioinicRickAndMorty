import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  episode = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode').subscribe(res =>{
      this.episode = res.results;
    });
  }

}
