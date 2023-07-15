import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


export const NotFound = () => {
  return (
    <div className=" bg-dark  text-white text-center d-flex justify-content-center align-items-center" style={{height:"575px"}}>

      <div className=''>
        <h2>OOOPs!!! This page not Found</h2>
        <Button variant="danger" ><Link to="/" className='text-white text-decoration-none'>Go Home</Link></Button>

      </div>

    </div>
  )
}
