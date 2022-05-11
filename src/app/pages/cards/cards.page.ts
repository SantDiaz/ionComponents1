import { Component, OnInit, ViewChild } from '@angular/core';

// usar ViewChild para acceder a una directiva, componente secundario
// y a un elemento DOM desde una clase principal de componentes

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})


export class CardsPage implements OnInit {

  likear: boolean;

  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/2.jpg', 
      username: 'Lola Dalmata', 
      location: 'India', 
      src: 'assets/imgs/posts/3.jpg',
      description: 'Cripto',
      likes: 15,
      image: true
    },
    {
      id: 2, 
      logo: 'assets/imgs/3.jpg', 
      username: 'German Valentin', 
      location: 'Argentina', 
      src: 'assets/imgs/posts/2.jpg',
      description: 'Facherito',
      likes: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/1.jpg', 
      username: 'Roxana Proxelana', 
      location: 'Miami', 
      src: 'assets/imgs/posts/4.jpg',
      description: "Lolapaasda",
      likes: 4,
      image: true

    },
    {
      id: 4, 
      logo: 'assets/imgs/4.jpg', 
      username: 'Santiago Lopez', 
      location: 'Chimbas', 
      src: 'assets/imgs/posts/1.jpg',
      description: "HOP",
      likes: 400,
      image: true

    }
 
  ];

   public press: number =0;
   

  constructor() {  
  }
  
  likeComment(item) {
    item.like = !item?.like;
  }

  ngOnInit() {
  }

  
  
 


}
