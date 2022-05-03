import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

// usar ViewChild para acceder a una directiva, componente secundario
// y a un elemento DOM desde una clase principal de componentes

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})


export class CardsPage implements OnInit {

  LikeValue: number;
  DislikeValue: number;


  @ViewChildren('instaVideo') videos: QueryList<any>;
  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/2.jpg', 
      username: 'Santiago Diaz', 
      location: 'India', 
      src: 'assets/imgs/posts/3.png',
      description: 'Hola amigosss',
      likes: 15,
      image: true
    },
    {
      id: 2, 
      logo: 'assets/imgs/3.jpg', 
      username: 'German Valentin', 
      location: 'Argentina', 
      src: 'assets/imgs/posts/2.png',
      description: 'Facherito',
      likes: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/1.jpg', 
      username: 'Roxana Proxelana', 
      location: 'Miami', 
      src: 'assets/imgs/posts/4.png',
      description: "Lolapaasda",
      likes: 4,
      image: true

    },
    {
      id: 4, 
      logo: 'assets/imgs/4.jpg', 
      username: 'Santiago Lopez', 
      location: 'Chimbas', 
      src: 'assets/imgs/posts/1.png',
      description: "Lolasdaasdpaasda",
      likes: 4,
      image: true

    }
 
  ];

public press: number =0;

  constructor() {  
     this.LikeValue = 0;
    this.DislikeValue = 0;
  }

  ngOnInit() {
  }

  toggleWrap(feed) {
    feed.wrap = !feed.wrap;
  }


  
  handleLike(){
    this.LikeValue++;
   }

   handleDislike(){
    this.DislikeValue--;
   }



}
