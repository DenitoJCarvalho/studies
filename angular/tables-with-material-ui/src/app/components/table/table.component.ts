import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  header: string[] = ['Chave Vendas', 'Localizador Vendas', 'Chave Online', 'Localizador Online', 'Chave Cartões', 'Localizador Cartões', 'data'];

  dataSource = [
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
}
