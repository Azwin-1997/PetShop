import React from 'react'
import { Nav,Navbar,NavDropdown ,Container  } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
// import  './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart,User ,PawPrint } from "phosphor-react";

 const Navba=()=> {
  const navigate = useNavigate()

  const logout =()=>{
    
    localStorage.clear()
    navigate('/')
  }
  return (
   

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><PawPrint size={32} weight="bold" /> PET SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Dogs</Nav.Link>
            <Nav.Link href="#pricing">Cats</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Nav.Link href=""><User size={32} /> My Profile</Nav.Link>

            <Nav.Link href="/cart"><ShoppingCart size={32} />My Cart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
  localStorage.getItem("login")?<button  style={{backgroundColor: "red",color: "#fff",padding: "8px 16px", border: "none",
  borderRadius: "4px",
  cursor: "pointer"}} onClick={logout}>Logout</button>:<button style={{backgroundColor: "#4CAF50",color: "#fff",padding: "8px 16px", border: "none",
  borderRadius: "4px",
  cursor: "pointer"}} onClick={()=>navigate('/login')}>Login/Signup</button>
}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    
  );
}

export default Navba;

{/* <nav className={styles.navigation}>
<Link to="/" className={styles.link}>Home</Link>&nbsp;
{' '}
<Link to="/dogs" className={styles.link}>Dogs</Link>&nbsp;
{' '}
<Link to="/cats" className={styles.link}>Cats</Link>
</nav>

<Nav.Link >
  dgfhdf
{/* <Nav.Link as={Link} to='/cart'>My Cart</Nav.Link> */}

{/* <Nav.Link as={Link} to='/cart'>My Cart</Nav.Link>

<div className='user'>
{
  localStorage.getItem("login")?<button  style={{backgroundColor: "red",color: "#fff",padding: "8px 16px", border: "none",
  borderRadius: "4px",
  cursor: "pointer"}} onClick={logout}>Logout</button>:<button style={{backgroundColor: "#4CAF50",color: "#fff",padding: "8px 16px", border: "none",
  borderRadius: "4px",
  cursor: "pointer"}} onClick={()=>navigate('/login')}>Login/Signup</button>
}
<br />

</div>
</Nav.Link> */} 
