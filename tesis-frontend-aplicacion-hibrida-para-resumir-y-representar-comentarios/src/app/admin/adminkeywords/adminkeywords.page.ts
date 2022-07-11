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
    this.graficaNubePalabras();

  }

  graficaNubePalabras(){
    const config = {
      type: 'wordCloud',
      data: {
        // text
        labels: ['Hello', 'world', 'normally', 'you', 'want', 'more', 'words', 'than', 'this'],
        datasets: [
          {
            label: 'DS',
            // size in pixel
            data: [90, 80, 70, 60, 50, 40, 30, 20, 10],
          },
        ],
      },
      options: {},
    };
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
  
 

}
