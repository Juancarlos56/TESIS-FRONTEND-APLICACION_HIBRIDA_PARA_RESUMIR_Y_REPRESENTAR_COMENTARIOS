import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import Chart from 'chart.js/auto';


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


  public data =[2,7,3,6];
  public idGrafico='pastel1';
  public idGrafico1='pastel2';
  public idGrafico2='pastel3';
  public idGrafico3= 'pastel4'

  public dataL =[20,2,7,3,6,9];
  public idGraficoL='linear1';
  public idGraficoL1='linear2';
  public idGraficoL2='linear3';



  constructor(private platform: Platform) { 

  }
  ngOnInit() {
  
    this.crearGraficas();
  }


  crearGraficas(){
    this.graficaPastel(this.data, this.idGrafico);
    this.graficaPastel(this.data, this.idGrafico1);
    this.graficaPastel(this.data, this.idGrafico2);
    this.graficaPastel(this.data, this.idGrafico3)

    this.graficaLineal(this.dataL, this.idGraficoL);
    this.graficaLineal(this.dataL, this.idGraficoL1);
    this.graficaLineal(this.dataL, this.idGraficoL2);


  }

graficaPastel(data, idGraficaP){
  this.milinearChart= new Chart(idGraficaP, { 
    type: 'doughnut',
    data : {
      labels: ['Red','Blue','Yellow'],
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

graficaLineal(dataL, idGraficaL){

    this.linearChart= new Chart(idGraficaL, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: dataL,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
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

}
