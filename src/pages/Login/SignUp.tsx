/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form"
import Header from "../../layouts/Header"
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { createUser } from "../../redux/features/user/userSlice";
import { toast } from "react-toastify";

interface IUser {
  email:string,
  password:string
}



const SignUp = () => {
  const { register, handleSubmit } = useForm<IUser>();
  
  const navigate = useNavigate()
  const dispatch =  useAppDispatch()
  
const onSubmit = (user:IUser) =>{

  //console.log(user)
  dispatch(createUser(user))
  .then(() => {
    toast.success('User Create Successfully')
    navigate('/');
  })
  .catch((error) => {
    console.error('Login error:', error);
  });

}
 
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>Email</label>
      
      <input {...register("email")} type="email" required placeholder="type Email"/>
      <br /><br />
      <label>Password</label>
      <input {...register("password")} type="number" placeholder="enter password"/>
      
      
      <input type="submit" />
    </form>
    <div>
      <p> Already Registered? Please <Link to="/sign-in">LogIn</Link></p>
    </div>
    
    </>
  )
}

export default SignUp