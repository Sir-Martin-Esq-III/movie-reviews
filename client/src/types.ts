export interface IMovieData{
    name:string,
    imgsrc:string,
    synopsis:string,
    rating:string,
    trailer:string,
    reviews:[]
}

export interface ParamTypes {
    movieID: string
}

export interface Icomment{
    id:number,
    username:string,
    userRating:number,
    ReviewContent:string
}