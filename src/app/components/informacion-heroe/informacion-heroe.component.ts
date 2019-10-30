import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-informacion-heroe',
  templateUrl: './informacion-heroe.component.html',
  styles: []
})
export class InformacionHeroeComponent implements OnInit {

  public heroeFiltrado:any={};

  constructor(private ActivatedRouter:ActivatedRoute,private _HeroeService:HeroeService) {
    const IdHeroeUrL=this.ActivatedRouter.snapshot.paramMap.get('id');
    // console.log(Parametro);
    this.heroeFiltrado=this._HeroeService.BuscarHeroes(IdHeroeUrL);
    console.log(this.heroeFiltrado);
    
    
   }

  ngOnInit() {
    // console.log('hola soy ngonit');
    
  }

}
