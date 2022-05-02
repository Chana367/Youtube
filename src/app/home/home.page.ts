import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  videos: any = []; //Arreglo de los videos
  texto;          // guarda comentario del text area
  textoBuscar=''; // guarda la palabra a buscar
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.getVideos().subscribe(res=>{console.log("RES  ",res) //me suscribo a los datos del servidor/.json
    this.videos = res;
  })
    
  }
//obtengo datos del archivo.json
  getVideos(){
    return this.http
    .get("assets/files/videos.json")  
    .pipe(
      map((res:any)=>{
        return res.data;
      })
      )
  }
  
  id(x){
    this.videos[x].id= x
    return this.videos[x].id
  }

 // funcion para dar like y sumar el like o restarlo
  Like(x){

      if(this.videos[x].like_bool==false && this.videos[x].dislike_bool==false){
        this.videos[x].likes= this.videos[x].likes+1
        this.videos[x].like_bool=true
        return this.videos[x].like_bool
      }else if(this.videos[x].like_bool==true && this.videos[x].dislike_bool==false){
        this.videos[x].like_bool=false;
        this.videos[x].likes = this.videos[x].likes -1;
      }
  }

// funcion para dar dislike y sumar el dislike o restarlo
  Dislike(x){
    
    if(this.videos[x].dislike_bool==false && this.videos[x].like_bool==false){
      this.videos[x].dislike_bool= true;
      this.videos[x].dislikes= this.videos[x].dislikes+1;
    }else if(this.videos[x].dislike_bool==true && this.videos[x].like_bool==false){
      this.videos[x].dislike_bool=false;
      this.videos[x].dislikes= this.videos[x].dislikes-1;
     }
  }

  //funcion para recibir y guardar el comentario
  enviar(x){
    
      this.videos[x].texto= this.texto
      this.videos[x].comentarios= this.videos[x].comentarios+1 
      //console.log(this.videos[x].texto); 
      return this.videos[x].texto 
             
  }

//funcion que busca con el search bar
  buscar(event){
    //console.log(event);
    this.textoBuscar= event.detail.value;
  
  }
 
 

}

