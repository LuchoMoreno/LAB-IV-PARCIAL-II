import { Injectable } from '@angular/core';



// HTTPCLIENT
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

// https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul
  public getAPICompleta(url = 'https://www.breakingbadapi.com/api/characters'){

    return this.http.get<Array<any>>(url);
  }

}
