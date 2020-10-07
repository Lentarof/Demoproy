import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galeria: Gallery) { }

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

}
