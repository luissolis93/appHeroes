import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroesRecibidos:Array<any>=[];

  public loading:boolean=true;
  constructor(private router:Router, public _HeroeService:HeroeService){}

  ngOnInit() {
    this.heroesRecibidos=this._HeroeService.returnheroes();
    setTimeout(() => {
      this.loading=false;      
    }, 2000);
    
  }

  public MandarInformacion(idHeroe){
    this.router.navigate(['informacionheroe',idHeroe])
    
  }

}
