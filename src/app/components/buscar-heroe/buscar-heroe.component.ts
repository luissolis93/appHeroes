import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino:string="";
  public heroesFiltrados:any={};
  public loading:boolean=true;

  constructor(private ActivatedRoute:ActivatedRoute,private _heroeService:HeroeService) {
  this.ActivatedRoute.params.subscribe((TerminoURL)=>{
    this.loading=true;
    this.termino=TerminoURL.termino;
    this.heroesFiltrados=this._heroeService.buscarHeroes(this.termino);
    this.loading=false;
    console.log(this.heroesFiltrados);
    console.log(this.termino);
    
    
    
  });
  
}

  ngOnInit() {
  }

}
