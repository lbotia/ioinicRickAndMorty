import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  episode = [];
  paginate = 1;

  @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/episode/?page='+this.paginate).subscribe(res =>{
      this.episode = res.results;
    });
  }

  loadData(event: any) {


    setTimeout(() => {
      console.log('paginate antes' , this.paginate);
      this.paginate = this.paginate +1;

      this.http.get<any>('https://rickandmortyapi.com/api/episode/?page='+this.paginate).subscribe(res =>{
        const listEpisodes = res.results;
        console.log('res service ---> ', res);
        if(!listEpisodes || listEpisodes.size === 0){
          console.log('lista characters emptyy' ,listEpisodes);
          event.target.complete();
          this.infitniteScroll.disabled = true;
          return;
        }
        this.episode.push( ...listEpisodes);
        console.log('paginate' , this.paginate);
        event.target.complete();
      });
    }, 500);

  }
}
