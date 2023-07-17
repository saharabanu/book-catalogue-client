/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { useDeleteBookMutation,  useGetCommentQuery,  useGetSingleBookQuery, usePostCommentMutation } from "../redux/features/book/booksApi";
import { Table, Toast } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


const BookDetails = () => {
  const {id} = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: reviewList, refetch } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [postComment, options] = usePostCommentMutation();
  const {data, isLoading, isError} = useGetSingleBookQuery(id);
  const [deleteBook, response] = useDeleteBookMutation();
// handle delete book
  const handleDelete = (_id: any) =>{
   deleteBook(_id)
   
 }
 // handle comment

 const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  setComment(e.target.value);
};

const handleCommentSubmit = (e:any) => {
  e.preventDefault()
  const options = {
    id: id,
    data: { reviews: comment },
  };
  console.log(data)
  postComment(options);
  setComment("");
};
  
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
            <td><button type="button" className="btn btn-warning"><Link to={`/edit-book/${data?.data?._id}`}>Edit</Link></button></td>
          </tr>
          </tbody>  
        </>;
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
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
    {content}
    </Table>
    <div>
      <form onSubmit={handleCommentSubmit}>
      <textarea  value={comment} onChange={handleCommentChange}/>

      <input type="submit" />
      </form>
    </div>

    <div>
    {reviewList?.data?.reviews.length > 0 ? (
              <ul className="list-disc list-inside">
                {reviewList?.data?.reviews.map(
                  (review: string, index: number) => (
                    <li key={index}>{review}</li>
                  )
                )}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
    </div>
   
    </>
  )
}

export default BookDetails