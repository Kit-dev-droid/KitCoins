import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { CoinGecko, CoinMarket } from '../services/coin-gecko';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule],
  template: `
    <p-table
        #dt2
        [value]="coins"
        dataKey="id"
        [rows]="10"
        [paginator]="true"
        [rowsPerPageOptions]="[10, 25, 50]"
        [globalFilterFields]="['name', 'current_price', 'price_change_percentage_24h', 'market_cap']"
        [tableStyle]="{ 'min-width': '75rem' }"
      >
      
      <ng-template pTemplate="header">
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Cap</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-item>
        <tr>
          <td>
            <img [src]="item.image" [alt]="item.name" width="20" height="20" />
            {{ item.name }} ({{ item.symbol | uppercase }})
          </td>
          <td>\R{{ item.current_price | number: '1.2-2' }}</td>
          <td [ngClass]="{ up: item.price_change_percentage_24h >= 0, down: item.price_change_percentage_24h < 0 }">
            {{ item.price_change_percentage_24h | number: '1.2-2' }}%
          </td>
          <td>\R{{ item.market_cap | number }}</td>
        </tr>
      </ng-template>
    </p-table>

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


 



  constructor(private api: CoinGecko){}

  coins: CoinMarket[] = [];
  ngOnInit() {

    //below is the api call
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
