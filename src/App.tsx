/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from './layouts/MainLayout';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './redux/hooks';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './libs/firebase';
import { setLoading, setUser } from './redux/features/user/userSlice';
function App() {
  const dispatch =  useAppDispatch()
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  
  return (
    <>
     <ToastContainer />
      <MainLayout/>
    </>
  )
}

export default App;


//http://wpdemo.magikthemes.com/fluence/
