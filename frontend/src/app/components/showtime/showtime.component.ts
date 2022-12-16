import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent {

  proposedMovies: Array<Movie>;
  movie: Movie;
  constructor(private movieService:MovieService){
    this.proposedMovies = new Array<Movie>;
    // this.movie = new Movie;
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
