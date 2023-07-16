/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"




interface IFormInput {
  name: String,
  email:string,
  password: string

 
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("name")} />
      <br /><br />
      <label>Email</label>
      
      <input {...register("email")} />
      <br /><br />
      <label>Password</label>
      <input {...register("password")} />
      
      
      <input type="submit" />
    </form>
    <Footer/>
    </>
  )
}

export default SignUp