import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Books = () => {
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
      <tbody>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
        <tr>
          <td>title 1</td>
          <td>Witson</td>
          <td>Travell</td>
          <td>2017</td>
          <td><Link to="/book-details/:id">Details</Link></td>
          
        </tr>
       
       
       
      </tbody>
     
    </Table>
    </>
  )
}

export default Books