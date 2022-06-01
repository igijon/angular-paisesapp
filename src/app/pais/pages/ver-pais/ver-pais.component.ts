import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators"; //Permite recibir un observable y devolver otro observable

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //La admiración es para que aunque no se inicialice TS confíe en mí.

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    //El componente ya está inicializado. El constructor es antes de que se inicialice
  //   this.activatedRoute.params
  //     .subscribe( ({ id }) => {

  //       this.paisService.getPaisPorAlpha( id )
  //         .subscribe( pais => {
  //           console.log(pais);
  //         })

  //     });
  // }
  this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) ),
      tap(console.log) //tap muestra por consola lo que devuelve el pipe
    )
    .subscribe( pais => {
      if( pais.length > 0 )
        this.pais = pais[pais.length-1];
    });
  }
}
