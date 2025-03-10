import { Component } from '@angular/core';
import { NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgxDatatableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  columns = [
    { prop: 'ID', name: 'ID' },
    { prop: 'ChaveVendas', name: 'Chave Vendas' },
    { prop: 'LocalizadorVendas', name: 'Localizdor Vendas' },
    { prop: 'ChaveOnline', name: 'Chave Online' },
    { prop: 'LocalizadorOnline', name: 'Localizador Online' },
    { prop: 'ChaveCartoes', name: 'Chave Cartões' },
    { prop: 'LocalizadorCartoes', name: 'Localizador Cartões' },
    { prop: 'Data', name: 'Data' }
  ];

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

  selectionType = SelectionType.single;

}
