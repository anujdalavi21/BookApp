import { Component,OnInit } from '@angular/core';

import { Book } from '../types/Book';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  books: Book[] =[];

  constructor( private demoService:DemoService){

  }


  isShowing: boolean = true;

 

  ngOnInit():void{

    this.books= this.demoService.getBooks();
  }


 

}



