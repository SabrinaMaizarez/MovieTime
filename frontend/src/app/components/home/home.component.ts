import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullMovie } from 'src/app/models/full-movie';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  chosenMovie: FullMovie;
  showtime: Array<FullMovie>;
  topic: string;
  showShowtime: boolean;
  movies: Array<Movie>;
  proposedMovies: Array<FullMovie>;
  votation: Array<FullMovie>;
  movie: Movie;
  movieToAdd: FullMovie;
  search: string;

  constructor(private movieService:MovieService, private http: HttpClient){
    this.movies = new Array<Movie>;
    this.proposedMovies = [];
    this.movie = new Movie;
    this.search = '';
    this.showShowtime = false;  
    // this.chosenMovie = null;
    this.topic = '';
    this.votation = new Array<FullMovie>;

    // this.changeResolution();
  }

  changeResolution(){
    let poster: string = this.chosenMovie.Poster;
    // let poster: string = "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
    // console.log(poster);
    poster = poster.replace("SX300", "SX1000"); 
    console.log(poster);
    this.chosenMovie.Poster = poster;

  }

  searchMovies(){
    this.movieService.getMovieSearch(this.search).subscribe((result) => {
      //Convertimos los players recibidos en JSON a objetos JavScript
      this.movies = new Array<Movie>();
      result['Search'].forEach((element: any) => 
      {
        this.movie = new Movie();
        Object.assign(this.movie,element); //convertimos
        this.movies.push(this.movie);
        // console.log(this.movie);
      });
    },
    error => { alert("Error en la petición"); } )
  }

  CreateShowtime(){
    this.showtime = new Array<FullMovie>;
    if(this.proposedMovies)
    {
      this.showtime = this.proposedMovies;
      this.showShowtime = true;
    }
    console.log(this.showtime);
  }
  
  addMovie(id: string){
    this.movieToAdd = new FullMovie();
    this.http.get<any>('http://www.omdbapi.com/?apikey=eb2d1392&i='+ id).subscribe({
      next: data => {
          this.movieToAdd = data;
          this.movieToAdd.Active = true;
          var aux = this.proposedMovies.findIndex(item => item.imdbID ===  this.movieToAdd.imdbID);
          if(aux == -1 ){
            this.proposedMovies.push(this.movieToAdd);
          }
          console.log(this.proposedMovies);
      },
      error: error => {
          let errorMessage = error.message;
          console.error('{errorMessage}', error);
      }
    })
  }

  voteMovie(id: string){
    movie= new FullMovie();
    var aux = this.votation.findIndex(item => item.imdbID === id);
    if(aux == -1 ){
      var movie = this.proposedMovies.find(item => item.imdbID ===  id);
      movie.Points = 1;
      this.votation.push(movie);
    }else{
      this.votation[aux].Points++;
    }
  }

  closeVotation(){
    let aux = Math.max.apply(Math, this.votation.map(function(o) { return o.Points; }))
    this.chosenMovie = new FullMovie();
    this.chosenMovie = this.votation.filter(function(o) { return o.Points === aux; })[0];
    this.changeResolution();
    // Math.max(...array.map(o => o.y)) <3 thx to atom code formatter
    console.log(this.chosenMovie);
  }
}
