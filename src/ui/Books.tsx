/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { IBook } from "../types/globalTypes";
import Spinner from 'react-bootstrap/Spinner'
import { useGetBooksQuery } from "../redux/features/book/booksApi";


const Books = () => {

  const {data,isLoading, isError}= useGetBooksQuery(undefined);

  let content = null;

    if (isLoading) {
        content = (
            <>
              <Spinner animation="border" variant="danger" />
            </>
        );
    }

    if (!isLoading && isError) {
        content = 'Something is wrong';
    }

    if (!isLoading && !isError && data?.data?.length === 0) {
        content = "No Books found!" ;
    }

    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data?.slice(0,9).map((book:IBook) =>(<tbody key={book.title}>
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publicationDate}</td>
            <td><Link to={`/book-details/${book._id}`}>Details</Link></td>
            
            
          </tr>
          </tbody>));
    }





  
  return (
    <>
    
 <Table responsive   className="container mt-5 border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>View</th>
          
        </tr>
      </thead>
    {content}
      
       
       
     
     
    </Table>
    </>
  )
}

export default Books