import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { Comentario } from '../models/Note';
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
        'X-RapidAPI-Key': environment.TOKEN_RAPIDAPI,
        'X-RapidAPI-Host': 'multilingual-sentiment-analysis2.p.rapidapi.com',
      },
      data: {text: comentario},
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }
  
  
  async guardarComentario( usercorreo:string, comentarioValor:string, tipo_comentario:string,  categoriaComentario: string)  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'guardarComentarioClasificacion',
      method:'POST',
      data: {'contenido_comentario': comentarioValor, 'tipoComentario': tipo_comentario, 
            'correoComentario': usercorreo, 'categoriaComentario':categoriaComentario
          },
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.stateComment
  }

  async guardarComentarioProductoRestaurante( usercorreo:string, comentarioValor:string, tipo_comentario:string, categoriaComentario: string, nombreProducto: string)  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'guardarComentarioClasificacionProducto',
      method:'POST',
      data: {'contenido_comentario': comentarioValor, 'tipoComentario': tipo_comentario, 
            'correoComentario': usercorreo, 'categoriaComentario': categoriaComentario,  
            'nombreProducto': nombreProducto
            },
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.stateComment
  }

  async listarComentariosUsuario( usercorreo:string)  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'comentariosUsuario',
      method:'POST',
      data: {'correoComentario': usercorreo},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios 
  }

  async listarComentariosCompletos()  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'todosComentariosAdmin',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios 
  }

  

  async listarComentarioPorFecha(fechaInicio: string, fechaFin:string){
    const options:HttpOptions = {
      url: environment.WS_PATH+'listarComentarioFecha',
      method:'POST',
      data: {'fechaInicio': fechaInicio, 'fechaFin': fechaFin},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios
  }

  
  async listarComentarioPorSentimiento(sentimiento: string){
    const options:HttpOptions = {
      url: environment.WS_PATH+'listarComentarioSentimiento',
      method:'POST',
      data: {'sentimiento':sentimiento},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios
  }

  async listarComentarioPorFechaSentimiento(fechaInicio: string, fechaFin:string, sentimiento: string){
    const options:HttpOptions = {
      url: environment.WS_PATH+'listarComentarioSentimientoFecha',
      method:'POST',
      data: {'fechaInicio': fechaInicio, 'fechaFin': fechaFin, "sentimiento": sentimiento},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios
  }

  async obtenerComentariosFacebookAPI(){
    const options:HttpOptions = {
      url: environment.WS_PATH+'obtenerComentariosFacebook',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data
  }

  async guardarComentariosFacebookAPI()  {
    
    const options:HttpOptions = {
      url: environment.WS_PATH+'guardarComentariosFacebook',
      method:'GET',
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.comentarios 
  }

  async filtrarComentariosFacebookFecha(fechaInicio: string, fechaFin:string){
    const options:HttpOptions = {
      url: environment.WS_PATH+'filtrarComentariosFacebookFecha',
      method:'POST',
      data: {'fechaInicio': fechaInicio, 'fechaFin': fechaFin},
      headers: {'Content-Type':  'application/json'}
    }
    const response: HttpResponse = await Http.request(options);
    return response.data.ComentariosRedesSociales
  }
}