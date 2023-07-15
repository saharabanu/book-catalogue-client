/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useParams } from "react-router-dom"
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";
import Spinner from 'react-bootstrap/Spinner'


const BookDetails = () => {
  const {id} = useParams();
  

  const {data, isLoading, isError} = useGetSingleBookQuery(id);
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
        content = <div>
          <h2>{data?.data?.title}</h2>
          <h2>{data?.data?.author}</h2>
          <h2>{data?.data?.genre}</h2>
          <h2>{data?.data?.publicationDate}</h2>
        </div>;
    }






  return (
   <>
   <div>
    {content}
   </div>
   </>
  )
}

export default BookDetails