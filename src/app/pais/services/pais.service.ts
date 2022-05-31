import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<any> {

    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get( url );

  }


}
