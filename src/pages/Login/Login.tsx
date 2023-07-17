/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { useForm, SubmitHandler } from "react-hook-form"
import Header from "../../layouts/Header"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { loginUser } from "../../redux/features/user/userSlice"

interface ILoginUser {
  email:string,
  password:string
}

const Login = () => {
  
  const { register, handleSubmit } = useForm<ILoginUser>();
  
  const navigate = useNavigate()
  const dispatch =  useAppDispatch()
  
const onSubmit = (user:ILoginUser) =>{

  //console.log(user)
  dispatch(loginUser(user))
  .then(() => {
    //toast.success("LoggedIn Successfully")
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
      <p> Don't have an Account? Please <Link to="/sign-up">Sign Up</Link></p>
    </div>
    
    </>
  )
}

export default Login