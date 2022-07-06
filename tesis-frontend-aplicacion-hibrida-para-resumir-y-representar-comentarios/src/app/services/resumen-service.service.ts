import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
@Injectable({
  providedIn: 'root'
})
export class ResumenServiceService {

  constructor() { }

  
  
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

}