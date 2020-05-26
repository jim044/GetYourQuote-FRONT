import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParseDataFunction } from 'src/app/utils/ParseDataFunction';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {

  constructor(private http : HttpClient) {}

  getAllCac40Components(){
    return this.http.get("http://localhost:8082/get/components?symbol=%255EFCHI").pipe(
      map(ParseDataFunction.extractData),
      catchError(ParseDataFunction.handleError)
    );
  }

  getChartByComponent(symbol : String){
    return this.http.get("http://localhost:8082/get/chart?interval=1d&symbol=" + symbol + "&range=3mo").pipe(
      map(ParseDataFunction.extractData),
      catchError(ParseDataFunction.handleError)
    );
  }

}
