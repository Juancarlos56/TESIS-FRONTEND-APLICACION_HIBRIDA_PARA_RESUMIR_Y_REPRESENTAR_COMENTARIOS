import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficaServiceService {

  constructor() {



   }

   async dataParaGraficaPorGenero(){
    const options:HttpOptions = {
      url: environment.WS_PATH+'usersGenero',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }

  async dataNumeroComentariosPorTipo(){
    const options:HttpOptions = {
      url: environment.WS_PATH+'cantidadDeComentariosPorTipo',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }

  async dataEdadUsuarios(){
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'usersEdad',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }

  
}
