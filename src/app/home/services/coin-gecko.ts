import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CoinMarket {
   id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

@Injectable({
  providedIn: 'root'
})

export class CoinGecko {
  private readonly API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
  constructor(private http: HttpClient) { }

  getMarkets(ids: string[], vsCurrency: string = 'zar'): Observable<CoinMarket[]> {
    const params = new HttpParams()
    .set('vs_currency',vsCurrency)
    .set('ids',ids.join(','));

    return this.http.get<CoinMarket[]>(this.API_URL, { params });
  }
}
