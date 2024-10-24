import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements AfterViewInit {

  header: string[] = ['Chave Vendas', 'Localizador Vendas', 'Chave Online', 'Localizador Online', 'Chave Cartões', 'Localizador Cartões', 'data'];

  data = [
    {
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    },
    {
      ChaveVendas: '01/09/2024 00-7106',
      LocalizadorVendas: '01/09/2024 00-7106',
      ChaveOnline: '01/09/2024 00-7106',
      LocalizadorOnline: '01/09/2024 00-7106',
      ChaveCartoes: '01/09/2024-Crédito-78,7',
      LocalizadorCartoes: '01/09/2024-Crédito-78,7',
      Data: '01/09/2024'
    }
  ];

  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }




}
