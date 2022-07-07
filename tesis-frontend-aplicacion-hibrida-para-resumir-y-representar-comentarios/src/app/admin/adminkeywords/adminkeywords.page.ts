import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-adminkeywords',
  templateUrl: './adminkeywords.page.html',
  styleUrls: ['./adminkeywords.page.scss'],
})
export class AdminkeywordsPage implements OnInit {

  constructor( private serviceStorage : FirestoreService) { }

  ngOnInit() {
    this.mostrarImagen();
  }

  mostrarImagen(){
    console.log(this.serviceStorage.traerImagenesStorage())

  }

}
