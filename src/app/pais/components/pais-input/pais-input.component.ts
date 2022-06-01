import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{


  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //Se emite cuando se deja de escribir

  debouncer: Subject<string> = new Subject(); //Es un observable de Rxjs

  termino: string = '';

  ngOnInit(): void {
    //Se dispara sólo una vez cuando el componente es creado y está inicializado
    this.debouncer
      .pipe(
        debounceTime(300) //Cuando dejo de escribir por 300ms es cuando actúa el suscribe...
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      })
  }

  buscar(): void {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( event: any ) {
    this.debouncer.next( this.termino );
  }


}
