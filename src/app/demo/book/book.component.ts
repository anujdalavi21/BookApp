import { Component,Input,Output,EventEmitter,OnInit, OnDestroy} from '@angular/core';

import {Book} from '../../types/Book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

  @Input() book:Book={} as Book;

  @Output() bookEmitter=new EventEmitter<Book>();

  isInCart:boolean=false;

  constructor(private cartService:CartService) {}

  
  ngOnInit(): void {
    
   
  }

  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }

}
