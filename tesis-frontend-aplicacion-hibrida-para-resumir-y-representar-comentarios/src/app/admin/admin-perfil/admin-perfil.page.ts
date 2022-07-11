import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { Key } from 'protractor';
import { GraficaServiceService } from 'src/app/services/grafica-service.service';


@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.page.html',
  styleUrls: ['./admin-perfil.page.scss'],
})
export class AdminPerfilPage implements OnInit {

  public milinearChart : Chart;
  public milinearChart1 : Chart;
  public milinearChart2: Chart;
  public linearChart : Chart;
  public barChart : Chart;


  public data= [];
  public data1= [];

//GRAFICAS PASTEL
  public label= [];
  public label1= [];

//GRAFICAS 
  public labelL= [];


  
  public label2= ['RED','AMA', 'GREEN']


  public idGrafico='pastel1';
  public idGrafico1='pastel2';
  public idGrafico2='pastel3';
  public idGrafico3= 'pastel4'

  public dataL =[];
  public idGraficoL='linear1';
  public idGraficoB='bar1';
  public idGraficoL2='linear3';





  constructor(private platform: Platform, 
              private  dataGraficaService: GraficaServiceService) { 

  }
  ngOnInit() {
  
    this.crearData();

  }

  crearData(){
    this.dataGraficaService.dataParaGraficaPorGenero().then(res=>{
      this.label = res.genero as []  ;   
      this.data = res.count as [];
      console.log(this.data);
      this.graficaPastel(this.data, this.idGrafico, this.label);

    });

    this.dataGraficaService.dataNumeroComentariosPorTipo().then(res=>{
      console.log(res)
      this.labelL = res.sentimiento as [];
      this.dataL = res.count as [];
      const titulo='Comentarios por tipo'
      this.graficaBar(this.dataL, this.idGraficoL, this.labelL, titulo);

    });

    this.dataGraficaService.dataEdadUsuarios().then(res=>{
      console.log(res)
      this.label = res.rango as [];
      this.data = res.count as []
      const titulo = 'Edad de Usuarios'
      this.graficaBar(this.data, this.idGraficoB, this.label, titulo)

    });



  }


  crearGraficas(){
    this.graficaPastel(this.data, this.idGrafico1, this.label1);
    this.graficaPastel(this.data, this.idGrafico2, this.label2);
    this.graficaPastel(this.data, this.idGrafico3, this.label2)

    this.graficaLineal(this.dataL, this.idGraficoL2, this.labelL);


  }

graficaPastel(data, idGraficaP, label){
  this.milinearChart= new Chart(idGraficaP, { 
    type: 'doughnut',
    data : {
      labels: label,
      datasets: [{
        label: 'My First Dataset',
        data: data,
        backgroundColor: [
          '#446AA3',
          '#DEE2FF',
          '#B3B9E8'
        ],
      }]
    },
    options: {
      
  }
  });
}

graficaLineal(dataL, idGraficaL, labelL){

    this.linearChart= new Chart(idGraficaL, {
      type: 'line',
      data: {
        labels: labelL,
        datasets: [{
            label: 'Tipo de Comentarios',
            data: dataL,
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
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
  }

  graficaBar(data, idGraficoBar, labelB, titulo ){
    this.barChart  = new Chart(idGraficoBar, {
      type: 'bar',
      data: {
        labels: labelB,
        datasets: [{
            label: titulo, 
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
            borderWidth: 1,
            order: 1,
        }]
    },
      options: {
        indexAxis: 'y',
        scales: {
          
            y: {
                beginAtZero: true
            }
        }
    }
    });

  }

}
