import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { CoinGecko, CoinMarket } from '../services/coin-gecko';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <h2>Crypto Prices (ZAR)</h2>

      <table >
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          @for (item of coins; track item.id) {
            <tr>
              <td>
                <img [src]="item.image" [alt]="item.name" width="20" height="20" />
                {{ item.name }} ({{ item.symbol | uppercase }})
              </td>
              <td>\R{{ item.current_price | number:'1.2-2' }}</td>
              <td [ngClass]="{'up': item.price_change_percentage_24h >= 0, 'down': item.price_change_percentage_24h < 0}">
                {{ item.price_change_percentage_24h | number:'1.2-2' }}%
              </td>
              <td>\R{{ item.market_cap | number }}</td>
            </tr>
          }
        </tbody>
      </table>
  `,
  styles: `table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th, td {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}
.error {
  color: #b91c1c;
}
.up {
  color: #16a34a;
  font-weight: 600;
}
.down {
  color: #dc2626;
  font-weight: 600;
}`
})
export class DashboardComponent {
  loading = true;
  error: string | null = null;
  // coins!: Observable<CoinMarket[]>;

  constructor(private api: CoinGecko){}

  coins: CoinMarket[] = [];
  ngOnInit() {
    this.api.getMarkets([], 'zar').subscribe({
      next: (data) => {
        this.coins = data;
        this.loading = false;
      },
      error: () => {
        this.error = " Could not load coins";
        this.loading = false;
      }
    });
 }



}
