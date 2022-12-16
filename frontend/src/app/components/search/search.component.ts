import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FullMovie } from 'src/app/models/full-movie';
import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() showtime: Array<FullMovie>;

  movies: Array<Movie>;
  proposedMovies: Array<FullMovie>;
  movie: Movie;
  movieToAdd: FullMovie;
  search: string;
  // showtime: string;
  constructor(private movieService:MovieService, private http: HttpClient){
    this.movies = new Array<Movie>;
    this.proposedMovies = [];
    this.movie = new Movie;
    this.search = '';
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

  // async propose(id: string){
  //   this.getMovie(id);
  //   this.proposedMovies.push(this.movieToAdd);

  //   console.log(this.proposedMovies);
  // }
  
  addMovie(id: string){
    this.http.get<any>('http://www.omdbapi.com/?apikey=eb2d1392&i='+ id).subscribe({
      next: data => {
          this.movieToAdd = new FullMovie();
          this.movieToAdd  = data;
          this.movieToAdd.Active = true; 
          this.proposedMovies.push(this.movieToAdd);
          console.log(this.proposedMovies);
      },
      error: error => {
          let errorMessage = error.message;
          console.error('{errorMessage}', error);
      }
    })
  }

  getShowtime() {
    this.showtime = this.proposedMovies;
  }

  getMoviesAdded() {
  //   this.movieService.getProposedMovies().subscribe(
  //     (result) => {
  //       this.movies.splice(0, this.movies.length);
  //       result.forEach(
  //         element => {
  //           let vMovie = new Movie();
  //           Object.assign(vMovie, element);
  //           this.proposedMovies.push(vMovie);
  //         }
  //       )
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  }
}
