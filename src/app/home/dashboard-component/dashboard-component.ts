import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinGecko, CoinMarket } from '../services/coin-gecko';
import { Table, TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { Button } from "primeng/button";

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, CommonModule, Button],
  template: `
    <div style='padding:5px'><h2 style= "text-align:center;">Coins</h2> </div>
    <p-table
        #dt2
        #dt1
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
            <p-button label="Clear" [outlined]="true" icon="pi pi-filter-slash" (click)="clear(dt1)" />
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
          <th pSortableColumn="name" style="width:20%">
              <div class="flex items-center gap-2">
                  Coin
                  <p-sortIcon field="name" />
              </div>
          </th>
          <th pSortableColumn="current_price" style="width:20%">
              <div class="flex items-center gap-2">
                  Price
                  <p-sortIcon field="current_price" />
              </div>
          </th>
          <th pSortableColumn="price_change_percentage_24h" style="width:20%">
              <div class="flex items-center gap-2">
                  24h %
                  <p-sortIcon field="price_change_percentage_24h" />
              </div>
          </th>
          <th pSortableColumn="market_cap" style="width:20%">
              <div class="flex items-center gap-2">
                  Market Cap
                  <p-sortIcon field="market_cap" />
              </div>
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
  searchValue: string | undefined;

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
 clear(table: Table) {
        table.clear();
        this.searchValue = ''
    }
}
