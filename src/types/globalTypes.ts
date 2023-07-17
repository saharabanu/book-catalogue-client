export type IBook = {
  userEmail?: string | null;
  _id?: string |undefined;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: [];
    };

    export type FormValues = {
        title: string;
        author: string;
        genre: string;
        publicationDate: string;
      };