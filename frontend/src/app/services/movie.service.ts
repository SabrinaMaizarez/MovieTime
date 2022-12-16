import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  OurUrl: string = "http+://localhost:3000/api/"

  Url: string = 'http://www.omdbapi.com/?plot=full&type=movie&apikey=eb2d1392';
  key: string = 'apikey=eb2d1392';

  // public getMovieById(id: string):Observable<any>{
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       // 'API': 'http://www.omdbapi.com',
  //       // 'API-Key': 'eb2d1392',

  //     }),
  //     params: new HttpParams({

  //     })
  //   }
  //   // return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
    
  //   // let movie = this._http.get(this.Url + "&i=" + id, httpOptions);
  //   let movie = this._http.get("http://www.omdbapi.com/?apikey=eb2d1392&i=tt0099785", httpOptions);
  //   return movie;
  // }
  
  // public getMovie(name: any):Observable<any>{
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({
  //   //   })
  //   // };

  //   // // return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
  //   // let movie = this._http.get('http://www.omdbapi.com/?apikey=eb2d1392&t=' + name );
  //   // return this._http.get(this.Url + '&t=' + name, httpOptions);
   
  // }

 
  public getMovieSearch(value: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        // 'X-RapidAPI-Host': 'free-nba.p.rapidapi.com', 
        // 'API': 'http://www.omdbapi.com',
        // 'API-Key': 'eb2d1392',
        // 'X-RapidAPI-Key': '0a888fcda0msh9982acb07e1d052p16cffbjsnd09f4ec3d15b'
      })
    };
    
    // return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
    return this._http.get(this.Url + "&s=" + value, httpOptions);
  }
// const moviesJson = await movies.json();
  addMovie(movie: Movie): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(movie);
    return this._http.post(this.OurUrl + "movie", body, option);
  }
}