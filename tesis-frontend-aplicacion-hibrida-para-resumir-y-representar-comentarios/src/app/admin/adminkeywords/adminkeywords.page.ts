import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-adminkeywords',
  templateUrl: './adminkeywords.page.html',
  styleUrls: ['./adminkeywords.page.scss'],
})
export class AdminkeywordsPage implements OnInit {
  notes = [6];

  public imagenKeywords1 = '';
  public imagenKeywords2 = '';
  public imagenKeywords3 = '';
  public imagenKeywords4 = '';
  private url= `images/nubePalabras/topPalabrasMasImportantesComentarioBy-very positive.png`
  private url1= `images/nubePalabras/topPalabrasMasImportantesComentarioRangoFecha.png`
  private url2= `images/nubePalabras/topPalabrasMasImportantesResumen.png.png`
  cont=0;

  public pruebaChart : Chart; 

  constructor( private serviceStorage : FirestoreService) { }

  ngOnInit() {
    this.mostrarImagen(this.url);
    this.mostrarImagen(this.url1);
    this.mostrarImagen(this.url2);


  }

  mostrarImagen(urlI){

    this.serviceStorage.traerImagenesStorage(urlI).then(res=>{
      console.log(res)
      if(this.cont==0){
        this.imagenKeywords1 = res;
        this.cont= this.cont+1;
      } if (this.cont==1){
        this.imagenKeywords2 = res;
        this.cont= this.cont+1;
      } if (this.cont==2){
        
        this.imagenKeywords3 = res;
      }
    });
  }
  
  graficaPrueba(){
    
    this.pruebaChart  = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
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
