import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { getStyle } from '@coreui/utils';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { Dashboard } from '../../dashboard/interfaces/dashboard.interface';

@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit, OnChanges {

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  dataTest: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];









  private setDataFromDashboard() {
    const dataset = this._dashboard.dashboard.cantidad_medicos.dataset || [];
    this.data[0] = [{
      label: 'Medico2s',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: dataset
    }];
  }


  @Input()
  _dashboard!: Dashboard;


  dataMedico = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: "Medicos Registrandose",
        backgroundColor: '#f87979',
        data: [1, 2, 3],
      }
    ]
  };

  dataIngreso = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: "Dinero Entrando",
        backgroundColor: '#f87979',
        data: [1, 2, 3],
      }
    ]
  };

  dataCita = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: "Citas Pendientes",
        backgroundColor: '#f87979',
        data: [1, 2, 3],
      }
    ]
  };

  dataCitaAtendida = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: "Citas Atendidas",
        backgroundColor: '#f87979',
        data: [1, 2, 3],
      }
    ]
  };

  ngOnChanges(changes: SimpleChanges): void {

    setTimeout(() => {
      // Este código se ejecutará después de 2 segundos

      this.dataMedico = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: "Medicos Registrandose",
            backgroundColor: '#f87979',
            data: this._dashboard?.dashboard?.cantidad_medicos?.dataset,
          }
        ]
      };


      this.dataIngreso = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: "Dinero Entrando",
            backgroundColor: '#66ff33',
            data: this._dashboard?.dashboard.cantidad_ingresos.dataset
          }
        ]
      };

      this.dataCita = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: "CitasPendientes",
            backgroundColor: '#f87979',
            data: this._dashboard?.dashboard.citas_pendientes.dataset
          }
        ]
      };

      this.dataCitaAtendida = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'July', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: "Citas Atendidas",
            backgroundColor: '#f87979',
            data: this._dashboard?.dashboard.citas_atendidas.dataset
          }
        ]
      };

      // Repite el mismo proceso para otras asignaciones de datos
    }, 2000); // 2000 milisegundos (2 segundos)


  }


  data: any[] = [];
  options: any[] = [];
  labels = [
    'Enero',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  datasets = [
    [{
      label: 'Medicos',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: [1]
    }], [{
      label: 'Ingresos',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-info'),
      pointHoverBorderColor: getStyle('--cui-info'),
      data: [this._dashboard?.dashboard?.cantidad_ingresos?.dataset]
    }], [{
      label: 'Citas Pendientes',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-warning'),
      pointHoverBorderColor: getStyle('--cui-warning'),
      data: [this._dashboard?.dashboard?.citas_pendientes?.dataset || [2, 1, 55]],
      fill: true
    }], [{
      label: 'My Fourth dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.7
    }]
  ];
  optionsDefault = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 0,
        max: 55,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();

  }

  setData() {
    for (let idx = 0; idx < 4; idx++) {
      this.data[idx] = {
        labels: idx < 3 ? this.labels.slice(0, 12) : this.labels,
        datasets: this.datasets[idx]
      };
    }
    this.setOptions();
  }

  setOptions() {
    for (let idx = 0; idx < 4; idx++) {
      const options = JSON.parse(JSON.stringify(this.optionsDefault));
      switch (idx) {
        case 0: {
          this.options.push(options);
          break;
        }
        case 1: {
          this.options.push(options);

          break;
        }
        case 2: {
          options.scales.x = { display: false };
          options.scales.y = { display: false };
          options.elements.line.borderWidth = 2;
          options.elements.point.radius = 0;
          this.options.push(options);
          break;
        }
        case 3: {
          options.scales.x.grid = { display: false, drawTicks: false };
          options.scales.x.grid = { display: false, drawTicks: false, drawBorder: false };
          options.scales.y.min = undefined;
          options.scales.y.max = undefined;
          options.elements = {};
          this.options.push(options);
          break;
        }
      }
    }
  }
}

@Component({
  selector: 'app-chart-sample',
  template: '<c-chart type="line" [data]="data" [options]="options" width="300" #chart></c-chart>'
})
export class ChartSample implements AfterViewInit {

  constructor() { }

  @ViewChild('chart') chartComponent!: ChartjsComponent;

  colors = {
    label: 'My dataset',
    backgroundColor: 'rgba(77,189,116,.2)',
    borderColor: '#4dbd74',
    pointHoverBackgroundColor: '#fff'
  };

  labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  data = {
    labels: this.labels,
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      ...this.colors,
      fill: { value: 65 }
    }]
  };

  options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      const data = () => {
        return {
          ...this.data,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            ...this.data.datasets[0],
            data: [42, 88, 42, 66, 77],
            fill: { value: 55 }
          }, { ...this.data.datasets[0], borderColor: '#ffbd47', data: [88, 42, 66, 77, 42] }]
        };
      };
      const newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      const newData = [42, 88, 42, 66, 77];
      let { datasets, labels } = { ...this.data };
      // @ts-ignore
      const before = this.chartComponent?.chart?.data.datasets.length;
      console.log('before', before);
      // console.log('datasets, labels', datasets, labels)
      // @ts-ignore
      // this.data = data()
      this.data = {
        ...this.data,
        datasets: [{ ...this.data.datasets[0], data: newData }, {
          ...this.data.datasets[0],
          borderColor: '#ffbd47',
          data: [88, 42, 66, 77, 42]
        }],
        labels: newLabels
      };
      // console.log('datasets, labels', { datasets, labels } = {...this.data})
      // @ts-ignore
      setTimeout(() => {
        const after = this.chartComponent?.chart?.data.datasets.length;
        console.log('after', after);
      });
    }, 5000);
  }
}
