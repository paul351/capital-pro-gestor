import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';

@Component({
  selector: 'app-indicadores-lista',
  templateUrl: './indicadores-lista.component.html',
  styleUrls: ['./indicadores-lista.component.scss']
})
export class IndicadoresListaComponent implements OnInit{
  view: [number, number] = [900, 500];
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Solicitud';
  yAxisLabel = 'Cantidad';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  dataGrafica: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let data: Solicitud = JSON.parse(sessionStorage.getItem('solicitud')!)
    data.solicitud?.forEach(element => {
      this.dataGrafica.push({name: element.fecha_solicitud, value: element.proceso.length})
    })
  }
}
