import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,cca2,population,flags');
  }
  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }

  getPaisPorAlpha( id: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );

  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this._apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams} )
      .pipe(
        tap(console.log)
      );

  }
}
