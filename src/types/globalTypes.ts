export type IBook = {
  userEmail?: string | null;
  _id?: string |undefined;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: [];
    };
  export interface BookData {
      userEmail?: string | null;
      _id?: string;
      title: string;
      author: string;
      genre: string;
      publicationDate: string;
      reviews?: string[];
    }

    export type FormValues = {
        title: string;
        author: string;
        genre: string;
        publicationDate: string;
      };


      export interface ReadData {
        userEmail?: string | null;
        readingStatus?: boolean | null;
        _id?: string;
        title: string;
        author: string;
        genre: string;
        publicationDate: string;
        reviews?: string[];
      }