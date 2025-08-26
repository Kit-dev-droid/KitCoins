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

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, CommonModule],
  template: `
    <div style='padding:5px'><h2 style= "text-align:center;">KitCoins</h2> </div>
    <p-table
        #dt2
        [value]="coins"
        dataKey="id"
        [rows]="10"
        [loading]="loading"
        [paginator]="true"
        [rowsPerPageOptions]="[10, 25, 50]"
        [globalFilterFields]="['name', 'current_price', 'price_change_percentage_24h', 'market_cap']"
        [tableStyle]="{ 'min-width': '75rem' }"
      >
      <ng-template #caption>
          <div class="flex">
              <p-iconfield iconPosition="left" class="ml-auto">
                  <p-inputicon>
                      <i class="pi pi-search"></i>
                  </p-inputicon>
                  <input pInputText type="text" (input)="onGlobalFilter($event, dt2)"  placeholder="Search keyword" />
              </p-iconfield>
          </div>
      </ng-template>

      <ng-template pTemplate="header">
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Cap</th>
        </tr>
        <tr>
          <th>
            <p-columnFilter type="text" field="name" placeholder="Type to search" ariaLabel="Filter Name" filterOn="input" [showMenu]="false"></p-columnFilter>
          </th>
          <th>
            <p-columnFilter type="text" field="current_price" placeholder="Type to search" ariaLabel="Filter Name" filterOn="input" [showMenu]="false"></p-columnFilter>
            <ng-template #filter let-value let-filter="filterCallback">
            <p-multiselect  placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" style="min-width: 14rem" [panelStyle]="{ minWidth: '16rem' }">
                  <ng-template let-option #item>
                      <div class="flex items-center gap-2">
                         
                          <span>{{ option.name }}</span>
                      </div>
                  </ng-template>
              </p-multiselect>
              </ng-template>
          </th>
          <th>
            <p-columnFilter type="text" field="price_change_percentage_24h" placeholder="Type to search" ariaLabel="Filter Name" filterOn="input" [showMenu]="false"></p-columnFilter>
          </th>
          <th>
            <p-columnFilter type="text" field="market_cap" placeholder="Type to search" ariaLabel="Filter Name" filterOn="input" [showMenu]="false"></p-columnFilter>
          </th>
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
  styles: `
    .up {
      color: #16a34a;
      font-weight: 600;
    }
    .down {
      color: #dc2626;
      font-weight: 600;
  }
  
  `
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
 onGlobalFilter(event: Event, dt: any) {
  const input = event.target as HTMLInputElement;
  dt.filterGlobal(input.value, 'contains');
}
}
