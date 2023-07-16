/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/ban-types */
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify';

import { useAddBookMutation } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";
import { useNavigate } from "react-router-dom";






interface IFormInput {
  title: string,
  author:string,
  genre: string,
  publicationDate:string

 
}

const AddNewBook = () => {
  const navigate =  useNavigate()
  const { register, handleSubmit, reset } = useForm<IFormInput>()
  
  const [addBook] = useAddBookMutation()
 
 
  

  
const onSubmit = async (data: any) => {
  addBook(data)
if(addBook.length){
  toast.success('book added successfully')
  navigate('/all-books')
}
else{
  toast.error('something went wrong')
}
  
};


  return (
    <>

        <div className="w-50 mx-auto border text-center mt-5 rounded pb-5">
          <h2 className=" py-3">Add New Book</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <input {...register("title")} placeholder="Type Unique title" className="w-75 py-1 px-3 " required/>
      <br /><br />
      <label>Author:</label>
      
      <input {...register("author")} placeholder="Type Author" className="w-75 py-1 px-3 " required/>
      <br /><br />
      <label>Genre: </label>
      <input {...register("genre")} placeholder="Type genre" className="w-75 py-1 px-3 " required/>
      <br /> <br />
      <label>PublicationDate</label>
      <input {...register("publicationDate")} className="w-75 py-1 px-3 " placeholder="Type valid Date with month" required/>
      <br /> <br />
      
      <input type="submit" value='Add Book' />
    </form>
        </div>
    </>
  )
}

export default AddNewBook