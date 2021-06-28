import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  characters = [];
  textoBuscar= '';
  paginate = 1;
  @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get<any>('https://rickandmortyapi.com/api/character/?page=' + this.paginate).subscribe(res =>{
      console.log(res);
      this.characters = res.results;
    });
  }

  buscar(event) {
    //console.log('evento',event);
    this.textoBuscar = event.detail.value;
  }

  loadData(event: any) {
    setTimeout(() => {
      this.paginate = this.paginate + 1;
      console.log('paginate -->>> ', this.paginate);

      this.http.get<any>('https://rickandmortyapi.com/api/character/?page=' + this.paginate).subscribe(res => {
        const listCharacters = res.results;
        console.log('tama;o lista' ,this.characters.length);
        if (!listCharacters || listCharacters.size === 0) {
          event.target.complete();
          this.infitniteScroll.disabled = true;
        }
        this.characters.push(...listCharacters);
        event.target.complete();
      });
    }, 500);
  }

  }
