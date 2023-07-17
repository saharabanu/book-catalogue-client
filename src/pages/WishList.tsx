/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Spinner, Table } from "react-bootstrap";
import { useGetWishlistQuery } from "../redux/features/book/booksApi";
import { IBook } from "../types/globalTypes";


const WishList = () => {
     const { data, isLoading, isError } = useGetWishlistQuery(null);

    
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
      content = "No wishlist found!" ;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((book:IBook) =>(<tbody key={book.title}>
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.publicationDate}</td>
        
        
        
      </tr>
      </tbody>));
}

  return (
    <>
    <Table responsive   className=" mt-5 border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
        </tr>
      </thead>
      </Table>
      {content}
    </>
  )
}

export default WishList