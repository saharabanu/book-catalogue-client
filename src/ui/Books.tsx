/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";


const Books = () => {

  const {data,isLoading} = useGetBooksQuery(undefined);
  console.log(data?.data)
  return (
    <>
    
 <Table responsive  striped className="container mt-5 border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>View</th>
        </tr>
      </thead>
    
      {data?.data?.map((book:IBook)=>(
      <tbody >
        <tr>
          <td>{book.title}</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        </tbody>
        ))}
       
       
     
     
    </Table>
    </>
  )
}

export default Books