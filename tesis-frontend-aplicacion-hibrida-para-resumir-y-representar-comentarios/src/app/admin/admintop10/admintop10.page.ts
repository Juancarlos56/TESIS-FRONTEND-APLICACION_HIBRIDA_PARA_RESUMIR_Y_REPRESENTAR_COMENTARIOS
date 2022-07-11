import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { GraficaServiceService } from 'src/app/services/grafica-service.service';


@Component({
  selector: 'app-admintop10',
  templateUrl: './admintop10.page.html',
  styleUrls: ['./admintop10.page.scss'],
})
export class Admintop10Page implements OnInit {

  private linearCharAdmintop : Chart;
  private milinearChart : Chart;
  private barChart: Chart;
  public data =[20,2,7,3,6,9];
  public idGrafico='linearCharAdmintop';


  constructor( private dataGraficaService: GraficaServiceService) { }

  ngOnInit() {

    this.graficaLineal(this.data, this.idGrafico);
    this.generarDatos();

   // this.graficaLineal(this.data, this.idGrafico1);
  }

  generarDatos(){
    this.dataGraficaService.dataNGrama('comentario', 10, 2, 'mixed').then(res=>{
      console.log(res)
    });
  }

 
  

graficaLineal(data, idGrafico){

    this.linearCharAdmintop  = new Chart(idGrafico, {
      type: 'bar',
      data: {
        labels: ['PALABRA 1', 'PALABRA 2', 'PALABRA 3', 'PALABRA 4', 'PALABRA 5', 'PALABRA 6'],
        datasets: [{
            label: 'palabra1', 
            data: data,
            backgroundColor: [
              '#446AA3',
              '#DEE2FF',
              '#B3B9E8',
              '#E8B3B7',
              '#9C595F',
              'rgba(38, 24, 74, 0.8)'


                        ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
      options: {
        indexAxis: 'x',
        scales: {
          
            y: {
                beginAtZero: true
            }
        }
    }
    });


  }

  customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true
  };

  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };




}
//'#446AA3','#DEE2FF','#B3B9E8','#E8B3B7','#9C595F' ['rgba(38, 24, 74, 0.8)', 'rgba(71, 58, 131, 0.8)','rgba(122, 120, 168, 0.8)']