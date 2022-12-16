import { Rating } from "./rating"

export class FullMovie {

    Title: string;
    Year: number;
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: Text;
    Country: string;
    Poster: string;
    imdbRating: number;
    imdbID: string;
    Type: string;
    Active: boolean;
    Points: number;

    constructor(Title?:string,Year?:number,Rated?:string,Runtime?:string,Genre?:string,Director?:string,Actors?:string,
                Plot?:Text,Country?:string,Poster?:string,imdbRating?:number,imdbID?:string,Type?:string,Active?:boolean,Points?:number){
        this.Title=Title;
        this.Year=Year;
        this.Rated=Rated;
        this.Runtime=Runtime;
        this.Genre=Genre;
        this.Director=Director;
        this.Actors=Actors;
        this.Plot=Plot;
        this.Country=Country;
        this.Poster=Poster;
        this.imdbRating=imdbRating;
        this.imdbID=imdbID;
        this.Type=Type;
        this.Active=Active;
        this.Points=Points;
    }
}
