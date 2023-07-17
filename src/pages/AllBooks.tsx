/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, ChangeEvent } from "react";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { IBook } from "../types/globalTypes";
import { useGetBooksQuery } from "../redux/features/book/booksApi";
import { toast } from 'react-toastify';
import BookCard from "../components/BookCard";

const AllBooks = () => {
  // for searching and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const {data: allBooks,isLoading, isError, isSuccess}= useGetBooksQuery(undefined);


  // searching and filtering handle change

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQueryValue = e.target.value.toLowerCase();
    setSearchQuery(searchQueryValue);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = e.target.value;
    setSelectedYear(selectedYearValue);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreValue = e.target.value;
    setSelectedGenre(selectedGenreValue);
  };
// books
  

    

const filteredBooks = allBooks?.data.filter((book: IBook) => {
  const isMatchingSearch =
    book.title.toLowerCase().includes(searchQuery) ||
    book.author.toLowerCase().includes(searchQuery) ||
    book.genre.toLowerCase().includes(searchQuery);
  const isMatchingYear =
    selectedYear === "" ||
    new Date(book.publicationDate).getFullYear().toString() === selectedYear;
  const isMatchingGenre =
    selectedGenre === "" || book.genre === selectedGenre;
  return isMatchingSearch && isMatchingYear && isMatchingGenre;
});

const genreOptions: string[] = Array.from(
  new Set(allBooks?.data.map((book: IBook) => book.genre))
);

    if (isLoading) {
      return <p>Loading.......</p>;
    }
  
    if (isError) {
      toast.error("Something went wrong");
      
    }
  

  
  return (
    <>{isSuccess && (<>
    <div className="row container">

          <div className="col-md-4 mt-5 ">
          <div >
             
             <div className="">
               <input
                 type="text"
                 placeholder="Search by title, author, or genre"
                 value={searchQuery}
                 onChange={handleSearch}
                 className=""
               />
             </div>
           </div>
           <div className="">
             
             <div className="">
               <label htmlFor="year" className="text-sm font-medium t">
                 Publication Year:
               </label>
               <select
                 id="year"
                 value={selectedYear}
                 onChange={handleYearChange}
                 className="block text-gray-900 font-semibold w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
               >
                 <option value="">All Years</option>
                 {Array.from(
                   new Set(
                     allBooks?.data.map((book: IBook) =>
                       new Date(book.publicationDate).getFullYear()
                     )
                   )
                 ).map((year) => (
                   <option value={year?.toString()} key={year?.toString()}>
                     {year as number}
                   </option>
                 ))}
               </select>
             </div>
             <div className="max-w-xl">
               <label htmlFor="genre" className="text-sm font-medium t">
                 Genre:
               </label>
               <select
                 id="genre"
                 value={selectedGenre}
                 onChange={handleGenreChange}
                 className="block w-full text-gray-900 font-semibold px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
               >
                 <option value="">All Genres</option>
                 {genreOptions.map((genre: string) => (
                   <option value={genre} key={genre}>
                     {genre}
                   </option>
                 ))}
               </select>
             </div>
             
           </div>
          </div>
          

    
  
  <div className="col-md-8">
  <Table responsive   className=" mt-5 border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>Wishlist</th>
          <th>Reading</th>
          <th>View</th>
          <th>AddBook</th>
        </tr>
      </thead>
      {filteredBooks?.map((book:IBook)=> (<BookCard  key = {book._id} book={book}/>))}
      
       
       
     
     
    </Table>
  </div>
    </div></>)}
    </>
  )
}

export default AllBooks