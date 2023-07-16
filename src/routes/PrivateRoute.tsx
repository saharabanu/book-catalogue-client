import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
// RingLoader
interface IProps {
    children: ReactNode;
  }


export default function PrivateRoute({children}:IProps) {
    const {pathname}= useLocation()
    const {user,isLoading} =  useAppSelector((state)=>state.user)
    if(isLoading){
         return <h5>loading.............</h5>


    }
    if( user?.email){
        return children
    }
  return <Navigate to="/sign-in" replace state={{path:pathname}}  ></Navigate>
}