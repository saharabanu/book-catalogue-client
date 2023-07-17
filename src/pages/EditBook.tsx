/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useEditBookMutation, useGetSingleBookQuery } from "../redux/features/book/booksApi";
import { toast } from "react-toastify";
import { FormValues } from "../types/globalTypes";


const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register,handleSubmit , reset } = useForm<FormValues>();
  const {data} = useGetSingleBookQuery(id);
  const [editBook] = useEditBookMutation();



const onSubmit = async (formData:FormValues) => {
  try {
    const updatedBookData = {
      id, data:formData
    };

    await editBook(updatedBookData);
    console.log('Book updated successfully!');
    navigate(`/book-details/${id}`); 
  } catch (error) {
    console.error('Failed to update book:', error);
  }
};

// Ensure that data is fetched before rendering the form
if (!data) {
  return <div>Loading...</div>;
}


  return (
    <>
      <div className="w-50 mx-auto border text-center mt-5 rounded pb-5">
        <p>{id}</p>
        <h2 className="py-3">Edit Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}> 
        
          <label>Title:</label>
          <input
            type="text"
            {...register("title")}
            defaultValue={data?.data?.title}
            className="w-75 py-1 px-3"
            required
          />
          <br />
          <br />
          <label>Author:</label>
          <input
           {...register("author")}
           defaultValue={data?.data?.author}
            className="w-75 py-1 px-3"
            required
          />
          <br />
          <br />
          <label>Genre: </label>
          <input
            {...register("genre")}
            defaultValue={data?.data?.genre}
            className="w-75 py-1 px-3"
            required
          />
          <br />
          <br />
          <label>Publication Date:</label>
          <input
            {...register("publicationDate")}
            defaultValue={data?.data?.publicationDate}
            className="w-75 py-1 px-3"
            required
          />
          <br />
          <br />

          <input type="submit"  />
        </form>
      </div>
    </>
  );
};

export default EditBook;
