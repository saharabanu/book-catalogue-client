import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-dark text-white header">
      <Container >
        <Navbar.Brand href="/" className='text-white'>Book Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/all-books" className='text-white'>All Books</Nav.Link>
            <Nav.Link href="/add-book" className='text-white'>Add Book</Nav.Link>
            <Nav.Link href="/login" className='text-white'>LogIn</Nav.Link>
            <Nav.Link href="/signup" className='text-white'>SignUp</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




export default Header