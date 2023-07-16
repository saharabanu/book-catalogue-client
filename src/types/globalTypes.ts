export type IBook = {
    _id:string;
    title:string;
    author: string;
    genre:string
    publicationDate:string
    reviews: string[] |[],
    status?:boolean
    };