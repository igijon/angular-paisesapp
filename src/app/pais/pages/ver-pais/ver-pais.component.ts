import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params
      .subscribe( ({ id }) => {

        this.paisService.getPaisPorAlpha( id )
          .subscribe( pais => {
            console.log(pais);
          })
          
      });
  }

}
