export class Movie {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;

    constructor(Title?:string,Year?:number,imdbID?:string,Type?:string,Poster?:string){
        this.Title=Title;
        this.Year=Year;
        this.imdbID=imdbID;
        this.Type=Type;
        this.Poster=Poster;
    }
}
