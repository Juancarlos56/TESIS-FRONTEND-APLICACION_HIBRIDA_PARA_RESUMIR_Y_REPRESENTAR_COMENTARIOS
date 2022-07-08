import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.page.html',
  styleUrls: ['./admin-perfil.page.scss'],
})
export class AdminPerfilPage implements OnInit {

  private milinearChart : Chart;
  private linearChart : Chart;

  constructor() { }
  varsssd = ''
  ngOnInit() {
    this.graficaPastel();
    this.graficaLineal();
  }

  
graficaPastel(){
  this.milinearChart  = new Chart('myChart', { 
    type: 'doughnut',
    data : {
      labels: ['Red','Blue','Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
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

graficaLineal(){

    this.linearChart  = new Chart('myChart1', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
