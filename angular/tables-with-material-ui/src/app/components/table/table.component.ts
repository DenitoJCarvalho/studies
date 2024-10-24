import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule, MatSortModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements AfterViewInit {

  private _liveAnnouncer = inject(LiveAnnouncer);

  header: string[] = ['ID', 'Chave Vendas', 'Localizador Vendas', 'Chave Online', 'Localizador Online', 'Chave Cartões', 'Localizador Cartões', 'data'];

  data = [
    {
      ID: 1,
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ID: 2,
      ChaveVendas: '01/09/2024 00-7105',
      LocalizadorVendas: '01/09/2024 00-7105',
      ChaveOnline: '01/09/2024 00-7105',
      LocalizadorOnline: '01/09/2024 00-7105',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ID: 3,
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ID: 4,
      ChaveVendas: '01/09/2024 00-7107',
      LocalizadorVendas: '01/09/2024 00-7107',
      ChaveOnline: '01/09/2024 00-7107',
      LocalizadorOnline: '01/09/2024 00-7107',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ID: 5,
      ChaveVendas: '01/09/2024 00-7108',
      LocalizadorVendas: '01/09/2024 00-7108',
      ChaveOnline: '01/09/2024 00-7108',
      LocalizadorOnline: '01/09/2024 00-7108',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    }
  ];

  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction} ending`);
    } else {
      this._liveAnnouncer.announce(`Sorting cleared.`);
    }
  }


}
