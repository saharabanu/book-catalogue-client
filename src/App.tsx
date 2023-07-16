import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from './layouts/MainLayout';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>
     <ToastContainer />
      <MainLayout/>
    </>
  )
}

export default App;


//http://wpdemo.magikthemes.com/fluence/
