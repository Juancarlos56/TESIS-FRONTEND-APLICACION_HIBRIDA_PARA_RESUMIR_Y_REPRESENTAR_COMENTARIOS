import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResumenServiceService {

  constructor() { }


  async tipoComentarioApiRest(comentario){
    const options:HttpOptions = {
      url: 'https://multilingual-sentiment-analysis2.p.rapidapi.com/sentiment/multilingual/1.0/classify',
      method:'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2376c0d36cmsha5bbc926e003defp162c2djsn5f53c06cce2c',
        'X-RapidAPI-Host': 'multilingual-sentiment-analysis2.p.rapidapi.com',
      },
      data: {text: comentario},
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }
  
  
  async guardarComentario( usercorreo:string, comentarioValor:string, tipo_comentario:string)  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'guardarComentario',
      method:'POST',
      data: {'contenido_comentario': comentarioValor, 'tipoComentario': tipo_comentario, 'correoComentario': usercorreo},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.stateComment
  }

  async listarComentariosUsuario( usercorreo:string)  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'listarComentariosUsuario',
      method:'POST',
      data: {'correoComentario': usercorreo},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.stateComment
  }


  async listarComentarioPorFecha(fechaInicio: string, fechaFin:string){
    const options:HttpOptions = {
      url: environment.WS_PATH+'listarComentarioFecha',
      method:'POST',
      data: {'fechaInicio': fechaInicio, 'fechaFin': fechaFin},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.stateComment
  }

}