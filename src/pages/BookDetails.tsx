/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useNavigate, useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { useDeleteBookMutation, useGetSingleBookQuery } from "../redux/features/book/booksApi";
import { Table, Toast } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


const BookDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  
  const {data, isLoading, isError} = useGetSingleBookQuery(id);
  
  const [deleteBook, response] = useDeleteBookMutation();


  const handleDelete = (_id: any) =>{
   deleteBook(_id)
   
 }
  
// single book get
  
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

    if (!isLoading && !isError && data?.data) {
        content = <>
        
        <tbody >
          <tr>
            <td>{data?.data?.title}</td>
            <td>{data?.data?.author}</td>
            <td>{data?.data?.genre}</td>
            <td>{data?.data?.publicationDate}</td>
            <td><button onClick={()=>handleDelete(data?.data?._id)} type="button" className="btn btn-danger">Delete</button></td>
            <td><button type="button" className="btn btn-warning">Edit</button></td>
            
            

            
          </tr>
          </tbody>
      
       
        
        
        
        
        
         
          
        </>;
    }



    // delete book 

    



  return (
   
    <Table responsive   className="container mt-5 border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
    {content}
    </Table>
   
  
  )
}

export default BookDetails