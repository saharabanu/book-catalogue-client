import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { signOut } from 'firebase/auth';
import { setUser } from '../redux/features/user/userSlice';
import { auth } from '../libs/firebase';


const Header = () => {
  const {user}   = useAppSelector(state=>state.user)
  const dispatch =  useAppDispatch()
  const handleLogout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
dispatch(setUser(null))
    }).catch((error) => {
      // An error happened.
    })
  }
  return (
    <>
    <Navbar expand="lg" className="bg-dark text-white header">
      <Container >
        <Navbar.Brand href="/" className='text-white'>Book Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
            className="ms-auto my-2 my-lg-0 text-white"
            
          >
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/all-books" className='text-white'>All Books</Nav.Link>
            <Nav.Link href="/add-book" className='text-white'>Add Book</Nav.Link>
            
            
            {  !user.email && <Nav.Link href="/sign-in" className='text-white'>Sign In</Nav.Link>}
            {
      !user.email  ?  <Nav.Link href="/sign-up" className='text-white'>SignUp</Nav.Link> : <> <p className="pt-2" >{ user.email}  </p> <button onClick={handleLogout} className="btn text-white" >LogOut</button></>
    }
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




export default Header