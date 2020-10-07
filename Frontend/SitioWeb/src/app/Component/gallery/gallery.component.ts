import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Gallery} from 'angular-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galeria: Gallery, private router:Router) { }

  ngOnInit(): void {
  }

  showGallery(index: number){
    let prop={
      images:[
        {path: 'https://i.ibb.co/sPySvs7/1.jpg'},
        {path: 'https://i.ibb.co/7n15DkX/2.jpg'}
      ],
      index
    };
    this.galeria.load(prop);
  }
  sitio(num:number){
    if(num==1)
    {this.router.navigate['/Nuestras-Casas']}


  }

}
