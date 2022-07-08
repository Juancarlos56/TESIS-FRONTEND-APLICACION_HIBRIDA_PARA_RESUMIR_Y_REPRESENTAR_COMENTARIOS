import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-adminkeywords',
  templateUrl: './adminkeywords.page.html',
  styleUrls: ['./adminkeywords.page.scss'],
})
export class AdminkeywordsPage implements OnInit {
  notes = [6];

  public imagenKeywords1 = '';
  constructor( private serviceStorage : FirestoreService) { }

  ngOnInit() {
    this.mostrarImagen();
  }

  mostrarImagen(){
    console.log(this.serviceStorage.traerImagenesStorage());
    this.serviceStorage.traerImagenesStorage().then(res=>{
      console.log(res)
      this.imagenKeywords1 = res;
    });
  }

}
