import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { GraficaServiceService } from 'src/app/services/grafica-service.service';
import { deleteDoc } from 'firebase/firestore';


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
  public filtroContenido = false;
  public filtroPalabras = false;
  public filtroClasificacion = false;
  public filtroNgrama = false;

  public tipoComentario = 'comentario'
  public numeroPalabras = 7
  public clasificacionSentimiento = 'SinClasificacion'
  public ngramaValor = 1
  public label= [];
  public titulo = ''
  @ViewChild('canvaID') canvaID: ElementRef;

  constructor( private dataGraficaService: GraficaServiceService) { }

  ngOnInit() {

    //this.graficaLineal(this.data, this.idGrafico);
    this.generarDatos();

   // this.graficaLineal(this.data, this.idGrafico1);
  }

  generarDatos(){
    this.dataGraficaService.dataNGrama(this.tipoComentario, this.numeroPalabras, this.ngramaValor, this.clasificacionSentimiento).then(res=>{
      console.log(res)
      this.label = res.token_text as [];
      this.data = res.count as []
      //this.linearCharAdmintop.destroy()
      this.graficaLineal(this.data, this.idGrafico, this.label)
    });
  }

  tipoBusqueda(event: any) {
    switch (event.detail.value) {
      case 'Contenido':
        this.filtroContenido = true
        this.filtroPalabras = false;
        this.filtroClasificacion = false;
        this.filtroNgrama = false;
        break;
      case 'Palabras':
        this.filtroPalabras = true
        this.filtroContenido = false;
        this.filtroClasificacion = false;
        this.filtroNgrama = false;
        break;
      case 'Clasificacion':
        this.filtroClasificacion = true
        this.filtroContenido = false;
        this.filtroPalabras = false;
        this.filtroNgrama = false;
        break;
      case 'Ngrama':
        this.filtroNgrama = true
        this.filtroContenido = false;
        this.filtroPalabras = false;
        this.filtroClasificacion = false;
        break;
      default:
        break;
    }
  }
  
  async tipoContenido(event: any) {
    this.tipoComentario = event.detail.value
    this.generarDatos()
  }

  async numeroPalabrasFilter(event: any) {
    this.numeroPalabras = event.detail.value
    this.generarDatos()
  }
  
  async filtroClasificacionSentimiento(event: any) {
    this.clasificacionSentimiento = event.detail.value
    this.generarDatos()
  }

  async cantidadNgramaFilter(event: any) {
    this.ngramaValor = event.detail.value
    this.generarDatos()
  }
  

graficaLineal(data, idGrafico, label){

    this.linearCharAdmintop  = new Chart(idGrafico, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
            label: '', 
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