import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor() { }

  getBooks() {

    return[
       {
          name: 'The C Programming Language',
          author: 'Dennis Ritchie',
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZwX8aJ_KDiBVjB7cpRu1TrHqV5lAEm6VrGB69-oWllylr74OG',
          amount: 450
        },
        {
          name: 'The C++ Programming Language',
          author: 'Bjarne Stroustrup',
          image: 'https://m.media-amazon.com/images/I/51iQMFmLFtL._SX396_BO1,204,203,200_.jpg',
          amount: 500
    
        },
        {
          name: 'C# in Depth',
          author: 'Jon Skeet',
          image: 'https://m.media-amazon.com/images/P/B09782P5H5.01._SCLZZZZZZZ_SX500_.jpg',
          amount: 2000
    
    
        },
    
        {
          name: 'Journey to Angular Development',
          author: 'Sukesh Marla',
          image: 'https://m.media-amazon.com/images/I/61vhsCS3V0L._AC_UL600_FMwebp_QL65_.jpg',
          amount: 1000
    
    
    
        }
    
      
    ];


  }


}


