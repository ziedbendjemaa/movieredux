import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import StarRating from './StarRating';

const NavBar = ({text, setText, stars, setStars}) => {
    return (
        <div>
            <Navbar style={{backgroundColor:"rgb(100, 15, 67)",height:"140px"}} >
    <Container>
    <Navbar.Brand href="#home" style={{color:"gold",fontSize:"50px",lineHeight:"50px",fontFamily:"nf-icon",textDecoration:"none solid rgb(229 , 9 , 20)",wordSpacing:"0px",verticalAlign:"middle"}}>Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      <form  >
        <input type="text" value={text} onChange={e=>setText(e.target.value)} />
        <StarRating rating={stars} handelrating={(x)=>setStars(x)} />
      </form>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
