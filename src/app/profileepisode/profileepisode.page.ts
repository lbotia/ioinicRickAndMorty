import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PopoverController} from '@ionic/angular';
import {PopinfoComponent} from '../popinfo/popinfo.component';


@Component({
  selector: 'app-profileepisode',
  templateUrl: './profileepisode.page.html',
  styleUrls: ['./profileepisode.page.scss'],
})
export class ProfileepisodePage implements OnInit {

  profileEpisodeId: string;
  episode;
  characterEpisode: any [] = [];
  listCharacters;
  habilitarlista= false;
  colorButton = '';
  constructor(
    private activateRouter: ActivatedRoute,
    private http: HttpClient,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {

    this.profileEpisodeId = this.activateRouter.snapshot.paramMap.get('idEpisode');
    this.http.get('https://rickandmortyapi.com/api/episode/' +this.profileEpisodeId).subscribe(res =>{

      this.episode= res;

      //this.episode.characters.forEach(character => this.characterEpisode.push(character));
      let numConcate = '';

      for (const lista of this.episode.characters) {


        const num = lista.replace('https://rickandmortyapi.com/api/character/','');

        numConcate = numConcate.concat(num).concat(',');

      }
      console.log(numConcate.slice(0, -1));
      this.getListCharacters(numConcate);
    });

  }
   getListCharacters(numConcate: string) {

     this.http.get('https://rickandmortyapi.com/api/character/'.concat(numConcate)).subscribe(res => {
       this.listCharacters = res;

       console.log('lista personajes--> ', this.listCharacters);
     });
   }

  habilitarLista() {

    this.habilitarlista = !this.habilitarlista;

  }

  async mostrarPopUp(evento, listCharacter: any){
    console.log('lista--> ',listCharacter);
    const popOver = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      componentProps: {
        name: listCharacter.name,
        specie: listCharacter.species,
        origin: listCharacter.origin.name
      }
    });
    await popOver.present();
  }


  getColorButton() {
     this.colorButton= '#01937C';
     return this.colorButton;
  }
}
