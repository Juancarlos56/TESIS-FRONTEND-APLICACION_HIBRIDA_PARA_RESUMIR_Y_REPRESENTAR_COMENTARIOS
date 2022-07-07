import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ResumenServiceService } from 'src/app/services/resumen-service.service';
import { format, parseISO } from 'date-fns';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-resumen',
  templateUrl: './admin-resumen.page.html',
  styleUrls: ['./admin-resumen.page.scss'],
})
export class AdminResumenPage implements OnInit {

  notes = [];
  agnosPersonalizados = [2020, 2016, 2008, 2004, 2000, 1996];
  opcionesPersonalizas: any;
  public datos: FormGroup;

  public fechaInicio = '';
  public fechaFin='';
  public showPickerInicio = false;
  public showPickerFin = false;
  
  public dataValue = format(new Date(), 'yyyy-MM-dd');
  public dataValueTodayMax = format(new Date(), 'yyyy-MM-dd');
  public formattedStringInicio = '';
  public formattedStringFin = '';
  


  constructor(private listaService : FirestoreService,
              private resumenService: ResumenServiceService,
              private loadingCtrl: LoadingController,
              private fb: FormBuilder) {

                this.setToday()

             
  }

  
  setToday() {
    this.formattedStringInicio = format(parseISO(this.dataValue), 'yyyy-MMMM-d');
    this.formattedStringFin = format(parseISO(this.dataValue), 'yyyy-MMMM-d');
  }        
             



  ngOnInit() {
   
    this.listaService.getNotes().subscribe(
      res=>{

        console.log(res);
        this.notes = res;
      }
    )
    this.datos = this.fb.group({
      
      fechaInicioForm: ['', [Validators.required]],
      fechaFinForm: ['', [Validators.required]],
    });

  }

  get fechaInicioForm() {
    return this.datos.get('fechaInicioForm');
  }
  get fechaFinForm() {
    return this.datos.get('fechaFinForm');
  }

  async listarComentarioService(){
    const usercorreo = this.listaService.getUsuarioEmail();
    const response= await this.resumenService.listarComentariosUsuario(usercorreo);

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Estamos creando tu comentario,  3 segundos...',
      duration: 6000
    });
    
    loading.present();
  }

  listarComentario(){

    this.datos.get('fechaForm').value;

  }
  
  cambiarFechaInicio(valorFecha) {
    this.dataValue = valorFecha;
    this.formattedStringInicio = format(parseISO(valorFecha), 'yyyy-MMMM-d');
    this.showPickerInicio = false;
  }

  cambiarFechaFin(valorFecha) {
    this.dataValue = valorFecha;
    this.formattedStringFin = format(parseISO(valorFecha), 'yyyy-MMMM-d');
    this.showPickerFin = false;
    
  }

  async cargarResumenFechas() {
    console.log("Buscar resumenes: -----")
    const cargarResumen = await this.resumenService.listarComentarioPorFecha(this.formattedStringInicio, this.formattedStringFin);
  }

  
}
