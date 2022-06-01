import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators"; //Permite recibir un observable y devolver otro observable

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

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
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) )
    )
    .subscribe( resp => {
      console.log(resp);
    });
  }
}
